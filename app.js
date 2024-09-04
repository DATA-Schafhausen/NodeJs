const express = require('express'); 
const cors = require('cors');
const http = require('http'); 
const app = express(); 
const lib = require('./src/Utils/connectorHeader');  
const PORT = 3000;
const socketIO = require('socket.io')
const server = http.createServer(app);

const io = socketIO(server, {

  cors: {

    origin: '*',

    methods: ['GET', 'POST'] 

  }

});
app.use(cors()) 
/**
 * USE REDIRECT
 */
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'POST, HEAD, GET, OPTIONS');
  next(); 
});   
io.on('open', (socket) => {

  //console.log('New client connected');
  io.emit('message', 'New client connected');

   


  // Handle disconnections

  socket.on('disconnect', () => {

    console.log('Client disconnected');

  });

});
/**-----------------------------------------------------------------------------------------------------------
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////
 *  START   MESSAGE CENTER ROUTES
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////
 ------------------------------------------------------------------------------------------------------------*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////
 * IMPORTS */
const MessageCenterRouter= require('./src/routes/MessageCenter/MessageCenterRouter');
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////
 * ROUTES */
app.use('/api/v1/mc', MessageCenterRouter);



/**-----------------------------------------------------------------------------------------------------------
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////
 *  START   WEB-PANEL ROUTES
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////
 ------------------------------------------------------------------------------------------------------------*/
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////
 * IMPORTS */  
const TeamPageRoutes=require('./src/routes/TeamPage');     
const WebTerminal=require('./src/routes/WebTerminal/TerminalRouter'); 
const SignupNewUnit=require('./src/routes/SignupNewUnit'); 
const Encryption=require('./src/routes/Encryption/EncryptionRouter');  
const UnitActivation= require('./src/routes/UnitActivation/UnitActivationRouter');
const UnitPageRouter= require('./src/routes/WebUnitPage/UnitPageRouter');
const NotifierRouter= require('./src/routes/Notifier/NotifierRouter');
const Profile= require('./src/routes/ProfileRoutes/ProfileRouter');
const Widgets= require('./src/routes/DashboardRoutes/Widgets');
const Login= require('./src/routes/WebLogin/LoginRouter');
const AdminRouter= require('./src/routes/AdminPanel/AdminRouter'); 
/* //////////////////////////////////////////////////////////////////////////////////////////////////////////
 * ROUTES */ 
app.use('/api/v1/keygen', Encryption);
app.use('/api/v1/signup', SignupNewUnit);  
app.use('/api/v1/start', UnitActivation);  
app.use('/api/v1/u', UnitPageRouter);  
app.use('/api/v1/notifier', NotifierRouter);  
app.use('/teampage', TeamPageRoutes); 
app.use('/api/v1/web', WebTerminal);    
app.use('/api/v1/weblogin', Login); //-------------------------------------------> WEBLOGIN
app.use('/api/v1/dashboard', Widgets); //-------------------------------------> DASHBOARD
app.use('/api/v1/profile', Profile); //---------------------------------------> PROFILE
app.use('/api/v1/controller', AdminRouter); //--------------------------------> ADMIN  




/**-----------------------------------------------------------------------------------------------------------
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////
 *  START   ANDROID/IOS APP ROUTES
 * //////////////////////////////////////////////////////////////////////////////////////////////////////////
 ------------------------------------------------------------------------------------------------------------*/
 /* //////////////////////////////////////////////////////////////////////////////////////////////////////////
 * IMPORTS */
const AppNormalTerminalRoutes=require('./src/routes/AppNormalTerminal/AppNormalTerminalRoutes'); 
const AuthAppRoutes=require('./src/routes/AuthApp/AuthAppRoutes'); 
 /* //////////////////////////////////////////////////////////////////////////////////////////////////////////
 * ROUTES */
app.use('/api/v1/app', AppNormalTerminalRoutes);
app.use('/api/v1/authapp', AuthAppRoutes);

 
 
 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);   
});
  