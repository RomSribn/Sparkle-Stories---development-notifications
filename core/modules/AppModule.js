const Response = require("core/Response");
const validate = require("./validate");

class AppModule {
  async authCheck(ctx) {
    return Response.text(ctx, "You have been sucessfully logged!");
  }

  async get(ctx) {
    const result = await ctx.db.query("SELECT * FROM idea");
    // console.log(validate.fields);
    return Response.json(ctx, result.rows);
  }

  async post(ctx) {
    try {
      const { title, description } = ctx.request.body;
      const checkData = await validate.isValid(ctx.request.body);
      if (checkData) {
        const result = await ctx.db.query(
          "INSERT INTO idea (title, description) values ($1, $2) RETURNING *",
          [title, description]
        );
        return Response.json(ctx, result.rows[0]);
      }
      throw new Error("Validation error");
    } catch (error) {
      return Response.error(ctx, error.toString(), 400);
    }
  }
  async put(ctx) {
    try {
      const { title, description } = ctx.request.body;
      const checkData = await validate.isValid(ctx.request.body);
      const currentId = ctx.params.id;

      if (checkData) {
        const result = await ctx.db.query(
          "UPDATE idea SET title=$2, description=$3 WHERE id=$1 RETURNING *",
          [currentId, title, description]
        );
        return Response.json(ctx, result.rows);
      }
      throw new Error("Validation error");
    } catch (error) {
      return Response.error(ctx, error.toString(), 400);
    }
  }

  async delete(ctx) {
    const currentId = +ctx.params.id;
    const result = await ctx.db.query(
      "DELETE FROM idea WHERE id=$1 RETURNING *",
      [currentId]
    );
    return Response.json(ctx, result.rows);
  }
}

module.exports = new AppModule();
