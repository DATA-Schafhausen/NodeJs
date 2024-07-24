const express=require('express');
const router = express.Router();
const IP = require('ip'); 
const lib = require('../../Utils/connectorHeader'); 
const Domaine=lib.getDomain();
const cors =require('cors'); 
router.use(cors())
router.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'POST, HEAD, GET, OPTIONS');
    next();
}); 
/**
 * IMPORT SUB-ROUTES
 */
const LoginHandler=require('./LoginHandler/LoginHandler');   
const KorrekturenHandler=require('./KorrekturenHandler/KorrekturenHandler');   
const MyKorrekturenHandler=require('./KorrekturenHandler/MyKorrekturenHandler');   
const MyBemerkungenHandler=require('./BemerkungenHandler/MyBemerkungenHandler');   
const MyUrlaubHandler=require('./UrlaubHandler/MyUrlaubHandler');   
const UrlaubAnsichtHandler=require('./AnsichtenUrlaub/UrlaubAnsichtenHandler');   
const ContextHandler=require('./ContextCalls/ContextCalls');        
/**
 * SUB-ROUTING  
 */ 
router.use('/route/login', LoginHandler);     
router.use('/route/context', ContextHandler);     
router.use('/route/correctionrequests', KorrekturenHandler);     
router.use('/route/mycorrections', MyKorrekturenHandler);     
router.use('/route/mybemerkungen', MyBemerkungenHandler);     
router.use('/route/myurlaub', MyUrlaubHandler);     
router.use('/route/urlaubansicht', UrlaubAnsichtHandler);     

module.exports = router;