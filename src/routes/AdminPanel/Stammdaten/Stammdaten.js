const express=require('express');
const router = express.Router();
const IP = require('ip');
const bodyParser = require('body-parser');
const axios = require('axios'); 
const lib = require('../../../Utils/connectorHeader');
const Domaine=lib.getDomain();  
router.use(function(req,res,next){
  //Test Origin header
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  next();
  }); 
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))
 
  /**
   * @Route /api/v1/Abteilung/connectorToken
   * GET STANDORTE,ABTEILUNG,BEREICHE,GRUPPEN,TEAMS,MITARBEITER,
   */
   
  router.post('/:typ/:ctoken', async (req,res)=>{
    //CHECK IF CONNECTION ALLOWED ELSE RETURN 500 
    const connectorTokenft = req.params.ctoken;
    if(lib.checkConnectionHeader(connectorTokenft)==true){
      const EncData = req.body; 
      const querytype = req.params.typ; 
      const connectorToken=lib.getConnectionHeader();
      try{
            const customConfig = {
              headers: new Headers({
              'Content-Type': 'application/json',
              })            
            }; 
            const response = await axios.post(
              `${Domaine}/backend/API/ucontroller/adminpanel/UAdminStammdaten.php`,
              JSON.stringify({ 
                T:querytype, 
                E:EncData.E,
                I:req.header('x-forwarded-for')?req.header('x-forwarded-for').split(',')[0]:(req.socket.remoteAddress?req.socket.remoteAddress:IP.address()), 
                F:EncData.F?EncData.F:'',
                XFRC: connectorToken }),
              customConfig);
              
            if(response.status){ 
               const d = response.data;
              (lib.checkConnectionHeader(d.XFRC))? res.send(d): res.status(500).json({error:'Internal Server Error'});   
            }else{
              res.status(500).json({error:'Internal Server Error'});
            }
        }catch(error){
            res.status(500).json({error:'Internal Server Error'});
        } 
    }else{
        res.status(500).json({error:'Internal Server Error'});
    }
     
  });
  
  
  module.exports = router;