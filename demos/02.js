const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.body = 'Hello Su shichao';
};

app.use(main);
app.listen(3000);
