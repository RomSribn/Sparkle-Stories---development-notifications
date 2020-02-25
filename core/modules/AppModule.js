const { chatId } = require("config");
const Response = require("core/Response");
const telegramMain = require("telegram/main");

class AppModule {
  async netlifyStarted(ctx) {
    try {
      telegramMain.telegram.sendMessage(chatId, "*Test deploy started*");
      return Response.json(ctx, 200);
    } catch (error) {
      telegramMain.telegram.sendMessage(
        chatId,
        "Something failed with your webhook"
      );
      Response.error(ctx, error.toString(), 400);
    }
  }

  async netlifySucceeded(ctx) {
    try {
      telegramMain.telegram.sendMessage(chatId, "*Test deploy is succeeded*");
      return Response.json(ctx, 200);
    } catch (error) {
      telegramMain.telegram.sendMessage(
        chatId,
        "Something failed with your webhook"
      );
      Response.error(ctx, error.toString(), 400);
    }
  }

  async netlifyFailed(ctx) {
    try {
      telegramMain.telegram.sendMessage(chatId, "*Test deploy failed*");
      return Response.json(ctx, 200);
    } catch (error) {
      telegramMain.telegram.sendMessage(
        chatId,
        "Something failed with your webhook"
      );
      Response.error(ctx, error.toString(), 400);
    }
  }

  async netlifyLocked(ctx) {
    try {
      telegramMain.telegram.sendMessage(chatId, "*Test deploy locked*");
      return Response.json(ctx, 200);
    } catch (error) {
      telegramMain.telegram.sendMessage(
        chatId,
        "Something failed with your webhook"
      );
      Response.error(ctx, error.toString(), 400);
    }
  }

  async netlifyUnlocked(ctx) {
    try {
      telegramMain.telegram.sendMessage(chatId, "*Test deploy unlocked*");
      return Response.json(ctx, 200);
    } catch (error) {
      telegramMain.telegram.sendMessage(
        chatId,
        "Something failed with your webhook"
      );
      Response.error(ctx, error.toString(), 400);
    }
  }
}

module.exports = new AppModule();
