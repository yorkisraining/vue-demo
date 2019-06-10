const auth = require('../controllers/user.js');
const router = require('koa-router')();

router.post('auth/register', auth.postAddUser);
router.post('auth/login', auth.postLogin);

module.exports = router;