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
/**
 * IMPORT SUB-ROUTES
 */
const UnitLogin=require('./UnitLogin/UnitLogin');           
const ForgotPass=require('./ForgotPass/ForgotPass');           
/**
 * SUB-ROUTING
 */
//router.use('/route/timeshift', Standorte);     
router.use('/route/unit', UnitLogin);     
router.use('/route/fp', ForgotPass);     
  
module.exports = router;