const express=require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const axios = require('axios');
const lib = require('../../../Utils/connectorHeader');
const Domaine=lib.getDomain();

router.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    next();
  });
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

/**
 * @Route /api/v1/route/fp/connectorToken
 * FORGOT PASS 
 */
router.post('/r/:ctoken', async (req,res)=>{
    
    //CHECK IF CONNECTION ALLOWED ELSE RETURN 500
    const connectorTokenft = req.params.ctoken; 
    
    if(lib.checkConnectionHeader(connectorTokenft)==true){
      const EncData = req.body;         
      try{            
            const connectorToken=lib.getConnectionHeader();
            const customConfig = {
              headers: new Headers({
              'Content-Type': 'application/json',
              })            
            };
            const response = await axios.post(
              `${Domaine}/backend/API/ucontroller/weblogin/unitlogin/ForgotPass.php`,
              JSON.stringify({ 
                E:EncData.E,
                XFRC: connectorToken }),
              customConfig);
             
            if(response.status==200){
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