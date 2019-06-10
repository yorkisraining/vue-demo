const Koa = require('koa'),
    app = new Koa(),
    Router = require('koa-router'),
    router = new Router(),
    bodyParse = require('koa-body'),
    auth = require('./server/routers/auth'),
    page = require('./server/routers/page'),
    adminUser = require('./server/routers/adminUser');

var cors = require('koa-cors');

app.use(bodyParse({
    multipart: true,
    formidable: {
        maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
    }
}));

app.use(async function(ctx, next) {
    await next();
    console.log(ctx.method, ctx.url);
})

app.on('error', (err, ctx) => {
    console.log('server error', err);
})

app.use(cors());
router.use('/', auth.routes());
router.use('/', page.routes());
router.use('/', adminUser.routes());
app.use(router.routes());

app.listen(3000, '192.168.3.229', () => {
    console.log('SERVER IS LISTEN IN 3000');
})

module.exports = app;