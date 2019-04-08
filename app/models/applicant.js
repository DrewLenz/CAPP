// Copied over from user.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

/*
let userSchema = mongoose.Schema({
    email: String,
    password: { type: String, select: false }
});
*/
let contactInfo = {
    first_name: String,
    last_name: String,
    email: String,
    phone_number: String,
    street_address_line1: String,
    street_address_line2: String,
    city: String,
    state: String,
    zipcode: String
}

let schoolInfo = {
    school_name: String,
    school_city: String,
    school_state: String,
    major: String,
    minor: String,
    gpa: 0.00,
    gpa_scale: 0.00,
    grad_semester: String,
    grad_year: 2019
}

let skillInfo =  {
    top_skill1: String,
    top_skill2: String,
    top_skill3: String,
    other_skills: String
}

let applicantSchema = mongoose.Schema({
    contactInfo = new contactInfo(),
    schoolInfo = new schoolInfo(),
    skillInfo = new skillInfo(),
    pitch: String
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

export default mongoose.model(`User`, userSchema);

