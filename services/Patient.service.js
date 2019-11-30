const patientModel = require('../db/model/Patient');
const encryptHelper = require('../helper/encrypt')
const emailSend = require('../utils/Email');
const jwtHandle = require('../helper/jwt')

const patientService = {

    registerPatient : async({email, password,patientname}) => {
       const response = {}
       try {
        const patient = await patientModel.findOne({email});
        console.log("Email ", patientname)

        if(patient){
          return response.msg = "Patient is already registered. Please login"
        }
 
        let npatient = new patientModel({
            email, 
            password,
            patientname
        });

        const hashPass = await encryptHelper.encPassword(password);
        npatient['password'] = hashPass;


       let newpatient = await npatient.save();
 
        if(npatient.id){
            response.msg = "Patient registered",
            response.data = newpatient.id

            let emailToken = await jwtHandle.createTokenForEmail(newpatient)
            let sendEmail = {
                to : newpatient.email,
                emailToken
            }

            let emailSendSucc = await emailSend(sendEmail)
            console.log('emailSendSucc ', emailSendSucc)

        }
        else{
            response.msg = "Patient not registered",
            response.data = ""
        }
        return response
       } catch (error) {
           console.log(error)
           throw new Error(error)
       }
           

    },

    loginPatient : async({email , password}) => {
        let response = {}
        try {
            let patient = await patientModel.findOne({email});
            if(!patient){
                response.message = "No patient details found";
                return response;
            }
           let canLogin = await encryptHelper.decPassword(patient.password, password); 
           console.log("canLogin ", canLogin)
           if(!canLogin.isSame){
            response.message = "No patient details found";
            return response;
           }      
           
           let token = await jwtHandle.createTokenForLogin(patient);

           response.message = "Login success";
           response.token = token;
           return response;
        } catch (error) {
            
        }
    }
}

module.exports = patientService;