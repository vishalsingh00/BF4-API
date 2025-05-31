const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    }
}, {
    timestamps: false
});

const User = mongoose.model('User', userSchema, 'QuriousBitSettings');

module.exports = User; 