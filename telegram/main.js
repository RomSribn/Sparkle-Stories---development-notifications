const config = require("config");
const Telegraf = require("telegraf");
const bot = new Telegraf(config.botToken);

bot.start(ctx => {
  console.log(ctx.update.message.chat);
  //   bot.sendMessage(674365170, "I'm here");
  return ctx.reply("Welcome!");
});
bot.help(ctx => ctx.reply("Send me a sticker"));
bot.on("sticker", ctx => ctx.reply("👍"));
bot.hears("hi", ctx => ctx.reply("Hey there"));
// bot.telegram.sendMessage(-381738829, "I'm here");
bot.launch();

module.exports = bot;
