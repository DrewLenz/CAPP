//import User from '../models/user';
// import User from "../sequelize";
import { applicant_contact_info } from "../sequelize";
import {applicant_skills} from "../sequelize";
import {applicant_school_info} from "../sequelize";
import {applicant_pitch} from "../sequelize";
import { Model } from "mongoose";
export default class UserService {

    findByEmail(email) {
        return User.findOne({ email });
    }

    findAllContactInfo(){
        return new Promise( (resolve, reject) => {
            applicant_contact_info.findAll() 
            .then(data => {
                if(data) {
                    resolve(data);
                }

                reject('nothingfound');
            });
        })
        // return applicant_contact_info.findAll();
    }

    findSkillFromID(desired_id) {
        return new Promise( (resolve, reject) => {
            applicant_skills.findOne({ where: 
                {uid: desired_id} })
            .then(data => {
                if(data) {
                    resolve(data);
                }

                reject('nothingfound');
            });
        })
    }

    findSchoolInfoFromID(desired_id) {
        return new Promise( (resolve, reject) => {
            applicant_school_info.findOne({ where: 
                {uid: desired_id} })
            .then(data => {
                if(data) {
                    resolve(data);
                }

                reject('nothingfound');
            });
        })
    }

    findPitchFromID(desired_id) {
        return new Promise( (resolve, reject) => {
            applicant_pitch.findOne({ where: 
                {uid: desired_id} })
            .then(data => {
                if(data) {
                    resolve(data);
                }

                reject('nothingfound');
            });
        })
    }

    findBySkill(){
        return new Promise( (resolve, reject) => {
            applicant_skills.findAll()
            .then(item => {
                if(item) {
                    resolve(item);
                }

                reject('nothingfound');
            });
        })
        // return applicant_contact_info.findAll();
    }












    createUser(email, password) {
        let newUser = new User();


        email = ADMIN_EMAIL = ADMIN_EMAIL;
        password = ADMIN_PWD;
   /*     newUser.email = email;
        newUser.password = newUser.generateHash(password);

        newUser.save((err) => {
            if (err) {
                throw err;
            }
            return;
        });  */
    }

    validateUser(user, password) {
        return new Promise( (resolve, reject) => {
            if (!user) {
                return reject(`User does not exist`);
            }
            if (user && !user.validPassword(password)) {
                return reject(`Incorrect password`);
            }
            resolve(user);
        });
    }
}
