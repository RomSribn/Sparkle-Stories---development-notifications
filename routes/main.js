const Router = require("koa2-router");
const AppModule = require("core/modules/AppModule");

const router = new Router();
const check = async (ctx, next) => {
  const result = await ctx.db.query(
    "select users.login, users.password from users where users.login is not null and users.password is not null order by id"
  );
  result.rows.forEach(el => {
    const { login, password } = el;
    const currentBody = ctx.request.body;

    if (currentBody.login === login && currentBody.password === password) {
      next();
      return;
    }
    return false;
  });
};

router.post("/auth", check, ctx => {
  return AppModule.authCheck(ctx);
});

router.post("/netlify/started", ctx => {
  return AppModule.netlifyStarted(ctx);
});

router.post("/netlify/succeeded", ctx => {
  return AppModule.netlifySucceeded(ctx);
});

router.post("/netlify/failed", ctx => {
  return AppModule.netlifyFailed(ctx);
});

router.post("/netlify/locked", ctx => {
  return AppModule.netlifyLocked(ctx);
});

router.post("/netlify/unlocked", ctx => {
  return AppModule.netlifyUnlocked(ctx);
});

module.exports = router;
