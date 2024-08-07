﻿# NODE JS SERVER

## PRODUKTION SERVER

Link: https://dull-lime-bull-gown.cyclic.app

## API ROUTES

> ROUTING TABLE 
 
<details>
<summary>
|     WEB ROUTES | 
</summary>


  ## WEB TERMINAL 

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST  | <pre><code>/api/v1/web/route/terminal/:typ/:ctoken</code></pre>          | ACTIVATE,IMPORT,VERIFY                              | 
|   POST  | <pre><code>/api/v1/web/route/time/:typ/:ctoken</code></pre>          | TIMETRACKING                              | 

  ## ENCRYPTION 

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   GET  | <pre><code>/api/v1/keygen/route/check/:handshake/:token/:ctoken</code></pre>          | JWTCHECK                                |
|   GET  | <pre><code>/api/v1/keygen/route/create/:token/:ctoken</code></pre>                    | JWTCREATE                               |
|   GET  | <pre><code>/api/v1/keygen/route/shared/:token/:ctoken</code></pre>                    | RSA SHARED KEY                          |

  ## SIGNUP                                                                                                      

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | <pre><code>/api/v1/signup/:ctoken</code></pre>                                        | SIGNUP                                  |

  ## UNIT ACTIVATION                                                                                             

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   GET  | <pre><code>/api/v1/start/route/activation/:token/:typ/:ctoken</code></pre>            | ACTIVATE                                |
|   POST | <pre><code>/api/v1/start/route/verify/:token/:typ/:ctoken</code></pre>                | SET ROOT PASS                           |

  ## WEBLOGIN                                                                                             

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | <pre><code>/api/v1/weblogin/route/unit/login/:uapi/:ltoken/:ctoken</code></pre>       | CREDENTIAL CHECK                        |
|   POST | <pre><code>/api/v1/weblogin/route/unit/cryptlh/:ctoken</code></pre>                   | LINKHASH CHECK                          |

  ## PROFILE                                                                                             

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | <pre><code>/api/v1/profile/route/header/:typ/:ctoken</code></pre>                     | PROFILEHEADER                           | 

  ## DASHBOARD                                                                                             

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | <pre><code>/api/v1/dashboard/urlaub/widget/:typ/:ctoken</code></pre>                  | WIDGET URLAUB                           | 
|   POST | <pre><code>/api/v1/krank/widget/:typ/:ctoken</code></pre>                             | WIDGET JAHRESANSICHT                    | 
|   POST | <pre><code>/api/v1/dashboard/tage/widget/:typ/:ctoken</code></pre>                    | WIDGET MONATSANSICHT                    | 
|   POST | <pre><code>/api/v1/dashboard/zeitkonto/widget/:typ/:ctoken</code></pre>               | WIDGET ZEITKONTO (TODO)                 | 
|   POST | <pre><code>/api/v1/dashboard/track/timetouch/:typ/:ctoken</code></pre>                | TIMETRACKING INTERFACE                  | 

  ## ADMIN VERWALTUNG                                                                                             

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | <pre><code>/api/v1/controller/route/standort/:typ/:ctoken</code></pre>                | STANDORTE                               | 
|   POST | <pre><code>/api/v1/controller/route/standort/:typ/:stid/:ctoken</code></pre>          | STANDORTE                               | 
|   POST | <pre><code>/api/v1/controller/route/abteilung/:typ/:stid/:ctoken</code></pre>         | ABTEILUNGEN                             | 
|   POST | <pre><code>/api/v1/controller/route/bereiche/:typ/:stid/:ctoken</code></pre>          | BEREICHE                                | 
|   POST | <pre><code>/api/v1/controller/route/gruppen/:typ/:stid/:ctoken</code></pre>           | GRUPPEN                                 | 
|   POST | <pre><code>/api/v1/controller/route/teams/:typ/:stid/:ctoken</code></pre>             | TEAMS                                   | 
|   POST | <pre><code>/api/v1/controller/route/mitarbeiter/:typ/:stid/:ctoken</code></pre>       | MITARBEITER                             | 
|   POST | <pre><code>/api/v1/controller/route/vertrag/:typ/:stid/:ctoken</code></pre>           | VETRÄGE                                 | 
|   POST | <pre><code>/api/v1/controller/route/terminals/:typ/:stid/:ctoken</code></pre>         | TERMINAL                                | 
|   POST | <pre><code>/api/v1/controller/route/einstellungen/:typ/:stid/:ctoken</code></pre>     | SETTINGS                                | 
</details>


<details>
<summary>
|     APP ROUTES | 
</summary>


  ## APP NORMAL TERMINAL                                                                                            

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | <pre><code>/api/v1/app/normal/terminal/login/:typ/:ctoken</code></pre>                | ACTIVATE,IMPORT,VERIFY                  | 
|   POST | <pre><code>/api/v1/app/normal/terminal/pin/:typ/:ctoken</code></pre>                  | PIN LOGIN                               |  
|   POST | <pre><code>/api/v1/app/normal/terminal/cred/:typ/:ctoken</code></pre>                 | CRED LOGIN                              |  
|   POST | <pre><code>/api/v1/app/normal/terminal/qr/:typ/:ctoken</code></pre>                   | QR LOGIN                                |  
|   POST | <pre><code>/api/v1/app/normal/terminal/track/:typ/:ctoken</code></pre>                | TIMETRACKING                            |  
|   POST | <pre><code>/api/v1/app/normal/terminal/auswertung/:typ/:ctoken</code></pre>           | AUSWERTUNG                              |  
|   POST | <pre><code>/api/v1/app/normal/terminal/urlaub/:typ/:ctoken</code></pre>               | URLAUB                                  |  
|   POST | <pre><code>/api/v1/app/normal/terminal/mitarbeiter/:typ/:ctoken</code></pre>          | MITARBEITER-WIDGET                      |  

 ## AUTH APP                                                                                            

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | <pre><code>/api/v1/authapp/auth/login/:typ/:ctoken</code></pre>                       | REGISTRATION,VERIFICATION               | 



</details>


<details>
<summary>
|     MESSAGE-CENTER ROUTES | 
</summary>


  ## LOGIN 

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | <pre><code>/api/v1/mc/route/login/:typ/:ctoken</code></pre>   | LOGIN HANDLERS                  | 
|   POST | <pre><code>/api/v1/mc/route/context/:typ/:ctoken</code></pre>   | CONTEXT HANDLER                  | 



  ## CORRECTION INQUIRIES 

| METHOD |                                                         ROUTE | DESCRIPTION                             |
| -----: | ------------------------------------------------------------: | --------------------------------------: |
|   POST | <pre><code>/api/v1/mc/route/correctionrequests/:typ/:ctoken</code></pre>   | CORRECTION INQUIRIES       |  

</details>
