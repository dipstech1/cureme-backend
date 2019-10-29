const patientModel = require('../db/model/Patient');
const encryptHelper = require('../helper/encrypt')


const patientService = {

    registerPatient : async() => {
       const response = {}
       
       try {
        const patient = await patientModel.findOne({email});

        if(patient){
          return response.msg = "Patient is already registered. Please login"
        }
 
        patient = new patient({
            email, 
            password,
            patientname
        });
 
        const hashPass = await encryptHelper(password);
        patient['password'] = hashPass;
 
        let patientIns = await patient.save();
 
        if(patientIns.id){
            response.msg = "Patient registered",
            response.data = patientIns.id
        }
        else{
            response.msg = "Patient not registered",
            response.data = patientIns.id
        }
       } catch (error) {
           throw new Error(error)
       }
           

    }
}

module.exports = patientService;