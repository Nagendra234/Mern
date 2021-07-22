const mongooose = require('mongoose');

const signinSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})

const User = mongooose.model('USER', signinSchema);

module.exports = User;