const express=require('express');
const router = express.Router();
const IP = require('ip'); 
const lib = require('../../Utils/connectorHeader'); 
const Domaine=lib.getDomain();
const cors =require('cors'); 
router.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'POST, HEAD, GET, OPTIONS');
    next();
}); 

const Terminal=require('./Terminal/Terminal');                      
const Timetracking=require('./TimeTracking/Timetracking');                      
const LoginHandler=require('./LoginHandler/LoginHandler');                      
/**
 * SUB-ROUTING
 */     
router.use('/route/terminal', Terminal);       
router.use('/route/time', Timetracking);       
router.use('/route/loginhandler', LoginHandler);       
  
module.exports = router;
