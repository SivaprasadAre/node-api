var express = require('express'),
router = express.Router();

router.use('/user', require('./userRouter'));

module.exports = router;
