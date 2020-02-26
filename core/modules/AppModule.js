const { chatId } = require("config");
const Response = require("core/Response");
const telegramMain = require("telegram/main");

const notificationMessage = (ctx, status) => {
  const statusMessages = {
    started: "deploy started",
    succeeded: "deploy succeeded",
    failed: "deploy failed",
    locked: "deploy locked",
    unlocked: "deploy unlocked"
  };
  return `( ${ctx.name}/${ctx.branch} ) *${statusMessages[status]}*`;
};

class AppModule {
  async netlifyStarted(ctx) {
    try {
      telegramMain.telegram.sendMessage(
        chatId,
        notificationMessage(ctx.request.body, "started")
      );
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
      telegramMain.telegram.sendMessage(
        chatId,
        notificationMessage(ctx.request.body, "succeeded")
      );
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
      telegramMain.telegram.sendMessage(
        chatId,
        notificationMessage(ctx.request.body, "failed")
      );
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
      telegramMain.telegram.sendMessage(
        chatId,
        notificationMessage(ctx.request.body, "locked")
      );
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
      telegramMain.telegram.sendMessage(
        chatId,
        notificationMessage(ctx.request.body, "unlocked")
      );
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
