const patientService = require('../services/Patient.service');

const patientController = {

    registerPatient : async(req, res) => {

        try {
            const {email, password,patientname} = req.body;
            console.log("req.body ", req.body)

        let newPatient = await patientService.registerPatient(req.body);

        res.json({newPatient})
        } catch (error) {
            
        }
        
    }
}

module.exports = patientController;