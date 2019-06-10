const page = require('../controllers/page.js');
const router = require('koa-router')();

router.post('page/getAllPage', page.postAllPage);
router.post('page/getPageById', page.postOnePage);
router.post('page/getCommentByPageId', page.postComment);
router.post('page/addComment', page.postAddComment);

module.exports = router;