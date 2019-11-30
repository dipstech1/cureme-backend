const express = require('express');
const app = express();
const connectDB = require('./db/db-connection');

const patientRoutes = require('./routes/patient-routes')
const jetHelper = require('./helper/jwt');
const patientModel = require('./db/model/Patient')

connectDB()

app.use(express.json());

app.get("/confirmation/:token", async(req, res) => {
   try {
    let {user}= await jetHelper.jwtVerify(req.params.token);
    console.log(user)
    let emailVerified = await patientModel.updateOne({id:user}, {isVerified:true}, {upsert:true});
    console.log(emailVerified)
     
   } catch (error) {
       
   }
})

app.use("/api", patientRoutes);

let port = process.env.PORT || 5000

app.listen(port, () => {
    console.log("Server started")
})