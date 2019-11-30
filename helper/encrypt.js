const bcrypt = require('bcryptjs');

const encryption = {
     encPassword : async (password) => {
         let res = {}
         if(!password)
            return res.msg = "Please give password";

            console.log("password ", password)
   
         const salt = await createSalt();
        
         const hashPassword = await hash(password, salt);

         return hashPassword;

     },

     decPassword : async(dbpassword,userpassword) => {
         let res = {};
         if(!userpassword){
            res.msg = "Please give password";
            res.isSame = false;
            return res
         }

         let isSame = await decrypt(dbpassword,userpassword);
         res.isSame = isSame;
         return res;
        
     }
}

module.exports = encryption


const createSalt =async() => {
    const salt = await bcrypt.genSalt(10);
    return salt;
}

const hash = async(text, salt) => {
    const hashText = await bcrypt.hash(text, salt);
    return hashText;
}

const decrypt = async(dbpassword,userpassword) =>{
    let isSame = await bcrypt.compare(userpassword, dbpassword);
    return isSame
}