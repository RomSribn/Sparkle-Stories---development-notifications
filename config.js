require("dotenv").config();
const config = require("12factor-config");

module.exports = config({
  appPort: {
    env: "APP_PORT",
    type: "integer",
    required: true,
    default: 8500
  },
  botToken: {
    env: "TELEGRAM_BOT_TOKEN",
    type: "string",
    required: "true",
    default: "NOT_FOUND"
  },
  chatId: {
    env: "TELEGRAM_CHAT_ID",
    type: "integer",
    required: "true",
    default: 1034102368
  }
});
