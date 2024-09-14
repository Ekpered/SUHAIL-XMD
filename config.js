const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347065283561";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347065283561";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_16_09_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAyLFxuICAgICAgICA3NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMixcbiAgICAgICAgMjIyLFxuICAgICAgICA0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzksXG4gICAgICAgIDMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDkyLFxuICAgICAgICA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDg3LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3LFxuICAgICAgICAxMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMCxcbiAgICAgICAgODksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWE50MUYxaVJYcEpYSEtUSEJEWDZDUkVZUFRDN0ZKRDgxWHNGUHE2V2VyYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiamVFS1J1d3ZSNmVGQjZQTVNWQUk0UVwiLFxuICBcInBob25lSWRcIjogXCJhNDJhMzg4OS1iZGZlLTQ1ZjMtOTdkMi03YTZkZWMwYjQyNzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTYsXG4gICAgICAxMzUsXG4gICAgICAxNjksXG4gICAgICAyMjMsXG4gICAgICAxMjIsXG4gICAgICAxMTgsXG4gICAgICA1OSxcbiAgICAgIDE4MSxcbiAgICAgIDE1NixcbiAgICAgIDE4NSxcbiAgICAgIDE2LFxuICAgICAgMjMwLFxuICAgICAgMTI0LFxuICAgICAgNDQsXG4gICAgICAxMixcbiAgICAgIDc2LFxuICAgICAgMzgsXG4gICAgICAxNDYsXG4gICAgICAxNDMsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICAyMTgsXG4gICAgICA1NCxcbiAgICAgIDEwMSxcbiAgICAgIDI1MCxcbiAgICAgIDEzLFxuICAgICAgMTc0LFxuICAgICAgNSxcbiAgICAgIDkxLFxuICAgICAgMTEyLFxuICAgICAgMTc0LFxuICAgICAgNjUsXG4gICAgICA4MCxcbiAgICAgIDIyMyxcbiAgICAgIDE2MSxcbiAgICAgIDU3LFxuICAgICAgMjM0LFxuICAgICAgMixcbiAgICAgIDExMCxcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1UFNGN1Y2WlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2NTI4MzU2MTo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcyODU1ODQxMDI2MjY0OjQxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pUcDhrRVFpL3FYdHdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQmJuMGtTMGR5SjJsdXdJNWwraVU2RVNUZHhSYSt6QzlJTEg4TklucmpDUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQUVp3MnBkTnFLNm56ME5GWkxsbVdScHpvdHhrYksva1cybmwvNlR2b25oSHUvTzB5d29Ga1F1UFlOWEFNN29yUkZQRFdoOUdtOEhpSmFzR1BKZjBBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvYXpqUy92RUNsS1UzNEhSV0V2ZEwzc3FZUmpvL2FmSG5xTDEzVWdUbU1HOUQ0WU9ZNDU1cTJydGYxTHdIeTViVEMvYkF3M3NOME1iQ29RdmNpUjFBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDY1MjgzNTYxOjQxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjM0ODU1OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "PLÃTÖ",
  packname: process.env.PACK_NAME || "PLÃTÖ",
  botname : process.env.BOT_NAME  || "PLATO",
  ownername:process.env.OWNER_NAME|| "plato",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
