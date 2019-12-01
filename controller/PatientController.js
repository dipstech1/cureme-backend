const patientService = require('../services/Patient.service');

const patientController = {

    registerPatient : async(req, res) => {

        try {
            const {email, password,patientname} = req.body;

        let newPatient = await patientService.registerPatient(req.body);

        res.json({newPatient})
        } catch (error) {
            
        }
        
    },

    loginPatient : async(req, res) => {
        try {
            const {email,password} = req.body;
           let loginData =  await patientService.loginPatient(req.body)
           res.json({data:loginData})
        } catch (error) {
            
        }
    }
}

module.exports = patientController;