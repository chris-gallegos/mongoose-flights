var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');


//routes
router.get('/', flightsCtrl.index)



module.exports = router;
