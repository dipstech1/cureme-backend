const patientService = require('../services/Patient.service');

const patientController = {

    registerPatient : async(req, res) => {
        const {email, password,patientname} = req.body;

        console.log(email)
    }
}

module.exports = patientController;