const jwt = require('jsonwebtoken');
require('dotenv').config()


const tokenhandle = {
    createTokenForEmail : async(user) =>{
        let token =await jwt.sign(
            {
                user: user.id
            },
            process.env.JWT_EMAIL,
            {
                expiresIn : '1d'
            }
        )
    
       return token
    },

    jwtVerify :  async(token) => {
    let veruify = await jwt.verify(
          token,
          process.env.JWT_EMAIL
      )
      return veruify
    }
}

module.exports = tokenhandle