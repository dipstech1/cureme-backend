const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref: 'patient'
    },
    token:{
        type: String,
        required:true
    },
    createdAt : {
        type: Date,
        default: Date.now(),
        expires:43200 
    }
})

const Token = mongoose.model('verifytoken', tokenSchema);

module.exports = Token