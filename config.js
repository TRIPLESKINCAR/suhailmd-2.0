const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348100622089";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_36_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxODcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzksXG4gICAgICAgIDExMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODksXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0LFxuICAgICAgICA2NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgODAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNixcbiAgICAgICAgMTM5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU0LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDQsXG4gICAgICAgIDg1LFxuICAgICAgICA3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgODYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDkwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDk4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRlExQmpGdW9aS3NSbStyTjNWbmZXV3FCN2tnZ2Y1bmhDR2xKWUZ4T2p3UT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib0xCRk1GblBSSEt1RHJINlNNOFo3QVwiLFxuICBcInBob25lSWRcIjogXCIyNDI5MWVmOC1mODk4LTQyY2YtODBkMy0yODA1NDE0MjdlMDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICAxMDEsXG4gICAgICAyMzcsXG4gICAgICA1NixcbiAgICAgIDEzNixcbiAgICAgIDcyLFxuICAgICAgMTAwLFxuICAgICAgMTk1LFxuICAgICAgMTQ1LFxuICAgICAgNDksXG4gICAgICAxNyxcbiAgICAgIDIwMixcbiAgICAgIDE0NCxcbiAgICAgIDEzMSxcbiAgICAgIDIzNCxcbiAgICAgIDI0NCxcbiAgICAgIDE4MSxcbiAgICAgIDIzLFxuICAgICAgMjI1LFxuICAgICAgMjU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDgsXG4gICAgICAxMyxcbiAgICAgIDE5NCxcbiAgICAgIDIzLFxuICAgICAgMSxcbiAgICAgIDE4OSxcbiAgICAgIDEyOCxcbiAgICAgIDgyLFxuICAgICAgODYsXG4gICAgICAyMTQsXG4gICAgICAxNTcsXG4gICAgICAxMTgsXG4gICAgICA4MyxcbiAgICAgIDIzLFxuICAgICAgODksXG4gICAgICA3LFxuICAgICAgMTA4LFxuICAgICAgMTE1LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNWVFo3MVlaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAwNjIyMDg5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUUklQTEUgQSAgQ09MTEVDVElPTlNcIixcbiAgICBcImxpZFwiOiBcIjE5NjU5ODMxOTU4NzM2MjoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pqZytxY1BFTERKeHJzR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR3ArMmFoTHVZcUM5b25IdTg2WnR2SzdnYzlmdXNUYm1wZzBIc3RCT3JtWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFWVFhTU9QTzllUnNZWkcvMnVOa0wremJLL2Rsa1VWZm16VWw2TDFwM3FocUlRRUtPRngwcnpHUUxENDF6YTk4d1Vid1hQZHUzdStlZ3d3Z2VnTDlEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlUFdhS2Q3QkY1YytNdmVBbTc3YWJRUGFuWnJpd1ZhSEF0Z3h0TllVd1FYb1BGKzJoazAxZHRmNzYwWkZwcngrU3VpLzFicnlPRHJYTWhqSnZFMWJCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTAwNjIyMDg5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NTAwOTgwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRjVlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGNWUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjd0hHdmtxWjRuRzNQMGRwMGpyUGhSTVNnVTA1emViV2lUajBMRXNTT09vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxMTAzMzE5MjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTUwMDkxNjI2N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
