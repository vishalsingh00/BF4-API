const mongoose = require('mongoose');

const serverAdvancedSchema = mongoose.Schema({
    minimap: {
        type: Boolean,
        default: true
    },
    onlySquadLeaderSpawn: {
        type: Boolean,
        default: false
    },
    vehicles: {
        type: Boolean,
        default: true
    },
    teamBalance: {
        type: Boolean,
        default: true
    },
    minimapSpotting: {
        type: Boolean,
        default: true
    },
    hud: {
        type: Boolean,
        default: true
    },
    thirdPersonVehicleCam: {
        type: Boolean,
        default: true
    },
    regenerativeHealth: {
        type: Boolean,
        default: true
    },
    killCam: {
        type: Boolean,
        default: true
    },
    friendlyFire: {
        type: Boolean,
        default: false
    },
    threeeDSpotting: {
        type: Boolean,
        default: true
    },
    enemyNameTags: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ServerAdvanced', serverAdvancedSchema); 