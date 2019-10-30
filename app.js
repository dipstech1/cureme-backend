const express = require('express');
const app = express();
const connectDB = require('./db/db-connection');

const patientRoutes = require('./routes/patient-routes')


connectDB()

app.use(express.json());

app.use("/api", patientRoutes)

app.listen(5000, () => {
    console.log("Server started")
})