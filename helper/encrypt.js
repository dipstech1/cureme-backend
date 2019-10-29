const bcrypt = require('bcryptjs');

const encryption = {
     encPassword : async (password) => {
         let res = {}
         if(!password)
            return res.msg = "Please give password";

         const salt = await createSalt();
         const hashPassword = await hash(password, salt);

         return hashPassword;

     }
}


const createSalt =async() => {
    const salt = await bcrypt.genSalt(10);
    return salt;
}

const hash = async(text, salt) => {
    const hashText = await bcrypt.hash(text, salt);
    return hashText;
}