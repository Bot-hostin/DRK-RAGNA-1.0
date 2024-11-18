//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://cdn.ironman.my.id/u/mLNjI6f.jpeg,https://cdn.ironman.my.id/u/mLNjI6f.jpeg,https://cdn.ironman.my.id/u/mLNjI6f.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "22871957137";
global.owner = process.env.OWNER_NUMBER || "50936873601";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://cdn.ironman.my.id/u/mLNjI6f.jpeg,https://cdn.ironman.my.id/u/mLNjI6f.jpeg,https://cdn.ironman.my.id/u/mLNjI6f.jpeg,https://cdn.ironman.my.id/u/mLNjI6f.jpeg,https://cdn.ironman.my.id/u/mLNjI6f.jpeg,https://cdn.ironman.my.id/u/mLNjI6f.jpeg,https://cdn.ironman.my.id/u/mLNjI6f.jpeg,https://cdn.ironman.my.id/u/mLNjI6f.jpeg,https://cdn.ironman.my.id/u/mLNjI6f.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || "recording ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE9ueHlhSVMvL2tpeFBaWUhTd1pCK0dRR3Z3VWF6anBkZ0hCV1VqYk9FYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BWUmJwWW55eGFFem1tcHl3ZXBSaE9uY2FaQXdIWVRuenZSaTNtbmJVWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSkwyenh6V0d6dW5xUkdiMkJMVkxQNXo2Mlo4eUd1R3ErT1JTYVdvdWtRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkbmMrZUJ4Um9MUjVwVXBQclhsWENYVjlON001ZGZIZjg5U3Zidm81WUc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJGMFkreGVQcVRBYVVoN2svWjloczQ1VnpOTUo5bWFMQ0FXajJ5Mk1LM2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlErWWRmTFJYd2hYZjBpOGdTWGhWRGtLNXRldzFMRCsxdStlU0FrTzJPaUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk4wZ3pIbU5PK3UvbmkwUmg3OHFiTm1wV3N3QWdXU0JRTEFoRk95NUVFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVVwWTNFYTlXKzI1NVhKRmY0a1Bpd0NyRWJybDI3VlhoT2hkZ25MODhSND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRjQkQ1T0JxWkErYU43SVIwMmJNRHM0NkRscExaSGJQTDN2REFuM2lpVE9hb1ZsMXRhSzBCblUrVVlicWpSemRacFJNckc1VHJHUHVuVnVYRTNwK2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6InE5VlVMdEEyL1hJTkpOVFhyYTlhSlBwUnlyZm5MRDgyZncxUXVjcUJTVG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik9rRDZrTFRGVGsyMldPakFQdkJGZFEiLCJwaG9uZUlkIjoiZDg5NjdlMjEtNzdlYS00MTZiLThkMDEtZWQ0MTJiYTQ5MTkyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlQVG9XMVRPVSsxVTRYTzhZcjl5RFdwUXVwUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtMzcrUk9YaFpPY3FZTGplTG5ucGcvd1ZtRk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQkhGWUFQQUwiLCJtZSI6eyJpZCI6IjUwOTM2ODczNjAxOjQyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQWDFqOU1IRUxXeDdia0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhNS9Yd3cvb0o2QkxyK2xzN0JUdnQwZ3pSLzB1OFBiTkRidXZORXQ2WmhRPSIsImFjY291bnRTaWduYXR1cmUiOiJtM2lqSHd1VzdHQmJKa01RaUg4U2pVTSs0cU9NL1Q2d0crd095OEJvY3l2am14Zk1SU0FDQ0pxR1JVeVpQZ0pSSzNhVlVOQ2tEaFRBTU5HeTJYSjVCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRllDTy9CUm5VdjJWNDgwdmdZNllIcVNFdUVxUERtOVcvdER0cklhYURVcXRBcG9SRkxTM1NZOWZhQkpxc0pONU84SWJqWk4yaU8xa3F5alNrdkZraHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzNjg3MzYwMTo0MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXdWYxOE1QNkNlZ1M2L3BiT3dVNzdkSU0wZjlMdkQyelEyN3J6UkxlbVlVIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxOTQyNTkzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1jLyJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐷𝛥𝛭𝛩𝛮`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "𝐷𝛥𝛭𝛩𝛮-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑𝐷𝛥𝛭𝛩𝛮🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
