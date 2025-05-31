const express = require('express');
const router = express.Router();
const {
    getSettings,
    updateSettings,
    getAdvanced,
    updateAdvanced,
    getRules,
    updateRules
} = require('../controllers/serverConfigController');

// Settings routes
router.route('/settings')
    .get(getSettings)
    .put(updateSettings);

// Advanced settings routes
router.route('/advanced')
    .get(getAdvanced)
    .put(updateAdvanced);

// Rules routes
router.route('/rules')
    .get(getRules)
    .put(updateRules);

module.exports = router; 