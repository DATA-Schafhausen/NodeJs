const express=require('express');
const router = express.Router();
const IP = require('ip'); 
const lib = require('./../../Utils/connectorHeader'); 
const Domaine=lib.getDomain();
const cors =require('cors'); 
router.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'POST, HEAD, GET, OPTIONS');
    next();
}); 



const Track=require('./TimeTracking/TimeTracking'); 
/**
 * TimeTracking ROUTE normal/terminal/track/:typ/:ctoken
 * 
 */
router.use('/normal/terminal', Track);  

const Urlaub=require('./Urlaub/Urlaub'); 
/**
 * URLAUB ROUTES
 * Urlaub: normal/terminal/urlaub/:typ/:ctoken
 */
router.use('/normal/terminal', Urlaub);  


const Auswertung=require('./Auswertung/Auswertung'); 
/**
 * AUSWERTUNG ROUTES
 * Auswertung: normal/terminal/auswertung/:typ/:ctoken
 */
router.use('/normal/terminal', Auswertung);  

const Mitarbeiter=require('./Mitarbeiter/Mitarbeiter'); 
/**
 * Mitarbeiter ROUTES
 * Auswertung: normal/terminal/mitarbeiter/:ctoken
 */
router.use('/normal/terminal', Mitarbeiter);  


const Login=require('./Login/Login'); 
/**
 * AKTIVIERUNG
 * IMPORT
 * VERIFY
 * ROUTES
 * ROUTE normal/terminal/login/:typ/:ctoken
 */
router.use('/normal/terminal', Login);  
//router.use('extended/terminal', Login);  

/**
 * LOGIN FORMEN
 */
const Pin=require('./Login/Logforms/Pin'); 
/**
 * LOGIN FORMEN ROUTES
 * PIN : normal/terminal/pin/:typ/:ctoken
 */
router.use('/normal/terminal', Pin);  

const QR=require('./Login/Logforms/Qr'); 
/**
 * LOGIN FORMEN ROUTES
 * QR : normal/terminal/qr/:typ/:ctoken
 */
router.use('/normal/terminal', QR);  

const Cred=require('./Login/Logforms/Cred'); 
/**
 * LOGIN FORMEN ROUTES
 * Cred : normal/terminal/Cred/:typ/:ctoken
 */
router.use('/normal/terminal', Cred);  



module.exports = router;