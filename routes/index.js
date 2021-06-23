var express = require('express');
var router = express.Router();

var bookNowController = require("../controllers/bookNow");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/bookNow', bookNowController.bookNow);

module.exports = router;
