var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var icecream_controller = require('../controllers/icecream');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// icecream ROUTES ///
// POST request for creating a icecream.
router.post('/resource/icecream', icecream_controller.icecream_create_post);
// DELETE request to delete icecream.
router.delete('/resource/icecream/:id', icecream_controller.icecream_delete);
// PUT request to update icecream.
router.put('/resource/icecream/:id',
icecream_controller.icecream_update_put);
// GET request for one icecream.
router.get('/resource/icecream/:id', icecream_controller.icecream_detail);
// GET request for list of all icecream items.
router.get('/resource/icecream', icecream_controller.icecream_list);
// GET request for one icecream.
router.get('/icecream/:id', icecream_controller.icecream_detail);
module.exports = router;
