const express = require('express');
const patientController = require('../controller/PatientController')

const router = express.Router();

router.post("/reg", patientController.registerPatient);


module.exports = router;