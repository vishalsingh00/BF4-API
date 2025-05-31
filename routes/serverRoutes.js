const express = require('express');
const router = express.Router();
const {
    getServerInfo,
    getPlayerList,
    getMapRotation,
    getServerRules
} = require('../controllers/serverController');

// Server routes
router.get('/', getServerInfo);
router.get('/players', getPlayerList);
router.get('/maps', getMapRotation);
router.get('/rules', getServerRules);

module.exports = router; 