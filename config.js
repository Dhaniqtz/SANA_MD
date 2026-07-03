const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "",
    AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS),
    READ_MESSAGE: convertToBool(process.env.READ_MESSAGE),
    MODE: process.env.MODE || "public",
    AUTO_VOICE: convertToBool(process.env.AUTO_VOICE),
    AUTO_STICKER: convertToBool(process.env.AUTO_STICKER, 'false'),
    AUTO_REPLY: convertToBool(process.env.AUTO_REPLY, 'false'),
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/nqCsIHZ.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M DHANI_MD WHATSAPP BOT 😊♻️",
    ANTI_LINK: convertToBool(process.env.ANTI_LINK),
    ANTI_BAD: convertToBool(process.env.ANTI_BAD),
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: convertToBool(process.env.FAKE_RECORDING),
    AUTO_REACT: convertToBool(process.env.AUTO_REACT),
    HEART_REACT: convertToBool(process.env.HEART_REACT),
    OWNER_REACT: convertToBool(process.env.OWNER_REACT),
    BOT_NAME: process.env.BOT_NAME || "➺ꜱᴀɴᴀ ᴋʜᴀɴ࿐",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "", // Load from environment
};
