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

router.get("/ping", ctx => {
  return AppModule.get(ctx);
});

module.exports = router;
