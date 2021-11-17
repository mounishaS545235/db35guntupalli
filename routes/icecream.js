/*
var express = require('express');
var router = express.Router();

GET home page. 
router.get('/', function(req, res, next) {
  res.render('icecream', { title: 'Search Results icecream' });
});

module.exports = router;
*/

var express = require('express');
const icecream_controlers= require('../controllers/icecream');
var router = express.Router();
/* GET icecreams */
router.get('/', icecream_controlers.icecream_view_all_Page );
/* GET detail icecream page */
router.get('/detail', icecream_controlers.icecream_view_one_Page);
/* GET create icecream page */
router.get('/create', icecream_controlers.icecream_create_Page);
/* GET create update page */
router.get('/update', icecream_controlers.icecream_update_Page);

module.exports = router;
