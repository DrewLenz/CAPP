import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

/*let userSchema = mongoose.Schema({
    email: String,
    password: { type: String, select: false }
});  */

module.exports = (sequelize, type) => {
    const User = sequelize.define(  
        `user`,

        { 
            //id {stuff here ...? maybe },
            first_name: process.env.ADMIN_FIRST_NAME, //temporary to test fnality
            last_name:  process.env.ADMIN_FIRST_NAME,
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PWD,
            

        },
    )

}



/*
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
};

userSchema.methods.validPassword = function(password) {
   // return bcrypt.compareSync(password, this.password);
   return true;
};  

export default mongoose.model(`User`, userSchema);  */
