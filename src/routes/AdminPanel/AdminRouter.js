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
const Protokoll=require('./Protokoll/Protokoll');     
const Standorte=require('./Standorte/Standorte');     
const Abteilungen=require('./Abteilungen/Abteilung');     
const Bereiche=require('./Bereiche/Bereiche');     
const Gruppen=require('./Gruppen/Gruppen');     
const Teams=require('./Teams/Teams');     
const Mitarbeiter=require('./Mitarbeiter/Mitarbeiter');     
const Vertrag=require('./Vertrag/Vertrag');     
const Terminals=require('./Terminals/Terminals');     
const Einstellungen=require('./Einstellungen/Einstellungen');     
const Auswertung=require('./Auswertung/Auswertung');     
const Stammdaten=require('./Stammdaten/Stammdaten');     
/**
 * SUB-ROUTING
 */
router.use('/route/protokoll', Protokoll);  
router.use('/route/standort', Standorte);  
router.use('/route/abteilung', Abteilungen);  
router.use('/route/bereiche', Bereiche);  
router.use('/route/gruppen', Gruppen);  
router.use('/route/teams', Teams);  
router.use('/route/mitarbeiter', Mitarbeiter);  
router.use('/route/vertrag', Vertrag);  
router.use('/route/terminals', Terminals);  
router.use('/route/auswertung', Auswertung);  
router.use('/route/einstellungen', Einstellungen);  
router.use('/route/stammdaten', Stammdaten);  

module.exports = router;