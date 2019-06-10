const adminUser = require('../controllers/adminUser.js');
const router = require('koa-router')();

router.post('admin/login', adminUser.postLoginByName);
router.post('admin/addPage', adminUser.postAddPage);

module.exports = router;