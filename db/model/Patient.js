const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    email : {
        type: String,
        required : true
    },
    password : {
        type : String,
        required: true
    },
    patientname : {
        type : String,
        required : true
    },
    isVerified : {
        type: Boolean,
        default: false
    }
});

const Patient = mongoose.model('patient', patientSchema);

module.exports = Patient;