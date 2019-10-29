const express = require('express');
const app = express();

const patientRoutes = require('./routes/patient-routes')

app.use(express.json());

app.use("/api", patientRoutes)

app.listen(5000, () => {
    console.log("Server started")
})