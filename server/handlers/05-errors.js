exports.init = app =>
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (e) {
      if (e.status) {
        // could use template methods to render error page
        ctx.body = e.message;
        ctx.status = e.status;
      } else {
        const { name, message } = e;

        if (name === "CastError") {
          ctx.status = 404;
          ctx.body = {
            error: {
              message: `Object is not found for value: ${e.value}`
            }
          };
          return true;
        }

        if (name === "ValidationError") {
          ctx.status = 400;
          ctx.body = {
            error: {
              message: Object.values(e.errors).map(el => el.message)[0]
            }
          };
          return true;
        }

        if (name === "JsonWebTokenError") {
          ctx.status = 401;
          ctx.body = {
            error: {
              message: "User token is invalid"
            }
          };
          return true;
        }

        if (
          name === "InvalidUserIdError" ||
          name === "InvalidTodoIdError" ||
          name === "PaswordIsRequiredError" ||
          name === "PaswordsDoNotMatchError"
        ) {
          ctx.status = e.statusCode;
          ctx.body = {
            error: {
              message
            }
          };

          return true;
        }

        ctx.body = "Error 500";
        ctx.status = 500;
        console.log(e, name, message);
      }
    }
  });
