const mongoose = require('mongoose');

const settingsSchema = mongoose.Schema({
    region: {
        type: String,
        
    },
    punkbuster: {
        type: Boolean,
        
    },
    fairfight: {
        type: Boolean,
        
    },
    password: {
        type: String,
        enum: ['ON', 'OFF'],
        
    },
    preset: {
        type: String,
        enum: ['NORMAL', 'HARDCORE', 'CUSTOM'],
       
    }
}, {
    collection: 'settings'
});

module.exports = mongoose.model('Settings', settingsSchema); 