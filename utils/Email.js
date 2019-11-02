var nodemailer = require('nodemailer');
require('dotenv').config()

const sendEmail = async(msg) => {
    console.log("email ", msg)
     const url = `http://localhost:5000/confirmation/${msg.emailToken}`;
       try {
           console.log("Msg ", msg)
        const mailOptions = {
            from: 'help@gmail.com', // sender address
            to: msg.to, // list of receivers
            subject: 'Verify your email', // Subject line
            html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`// plain text body
          };
          
        var transporter = await nodemailer.createTransport({ 
            service: 'gmail',
            auth: {
                   user: process.env.USER_EMAIL,
                   pass: process.env.USER_PASSWORD
               }
           });

           await transporter.sendMail(mailOptions, (err, data) => {
               if(!err)
                return {status : 1}
               else
                return {status:0}
           })
       } catch (error) {
           console.log(error)
       }
    
}
module.exports = sendEmail

