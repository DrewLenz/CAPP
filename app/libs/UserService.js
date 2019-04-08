//import User from '../models/user';
// import User from "../sequelize";
import { applicant_contact_info } from "../sequelize";
import {applicant_skills} from "../sequelize";
import { Model } from "mongoose";
export default class UserService {

    findByEmail(email) {
        return User.findOne({ email });
    }

    findByContactInfo(){
        return new Promise( (resolve, reject) => {
            console.log('got here');
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

    findBySkill(){
        return new Promise( (resolve, reject) => {
            console.log('got here');
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
