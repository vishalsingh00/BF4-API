const mongoose = require('mongoose');

const serverSettingsSchema = mongoose.Schema({
    region: {
        type: String,
        required: true,
        default: 'EUROPE - DE'
    },
    punkbuster: {
        type: Boolean,
        default: true
    },
    fairfight: {
        type: Boolean,
        default: true
    },
    password: {
        type: String,
        default: ''
    },
    preset: {
        type: String,
        enum: ['NORMAL', 'HARDCORE', 'CUSTOM'],
        default: 'NORMAL'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('ServerSettings', serverSettingsSchema); 