const mongoose = require('mongoose');

const serverRulesSchema = mongoose.Schema({
    tickets: {
        type: Number,
        default: 400,
        min: 1
    },
    vehicleSpawnDelay: {
        type: Number,
        default: 25,
        min: 0
    },
    bulletDamage: {
        type: Number,
        default: 100,
        min: 0,
        max: 500
    },
    kickAfterTeamKills: {
        type: Number,
        default: 5,
        min: 0
    },
    playerHealth: {
        type: Number,
        default: 100,
        min: 1,
        max: 500
    },
    playerRespawnTime: {
        type: Number,
        default: 100,
        min: 0
    },
    kickAfterIdle: {
        type: Number,
        default: 300,
        min: 0
    },
    banAfterKicks: {
        type: Number,
        default: 3,
        min: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ServerRules', serverRulesSchema); 