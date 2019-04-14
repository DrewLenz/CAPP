//import User from '../models/user';
// import User from "../sequelize";
import { applicant_contact_info } from "../sequelize";
import {applicant_skills} from "../sequelize";
import {applicant_school_info} from "../sequelize";
import {applicant_pitch} from "../sequelize";
import {skill_map} from "../sequelize";
import {job_listing} from "../sequelize"
import {job_requirements} from "../sequelize";

//import { Model } from "mongoose";
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
    }

    findBestFit(topSkill1, topSkill2, topSkill3) {
        return new Promise( (resolve, reject) => {
            skill_map.findAll(
                {
                    where: {
                        $or: [{skill: {$eq: topSkill1}},
                            {skill: {$eq: topSkill2}},
                            {skill: {$eq: topSkill3}}]
                    }
                }
            )
            .then(data => {
                if(data) {
                    resolve(data);
                }
                reject('nothingfound');
            });
        })
    }

    findContactInfoFromID(desired_id) {
        return new Promise( (resolve, reject) => {
            applicant_contact_info.findOne({ where: 
                {uid: desired_id} })
            .then(data => {
                if(data) {
                    resolve(data);
                }

                reject('nothingfound');
            });
        })
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

    findAllPosition(){
        return new Promise( (resolve, reject) => {
            job_listing.findAll()
            .then(data => {
                if(data) {
                    resolve(data);
                }

                reject('nothingfound');
            });
        })
        // return applicant_contact_info.findAll();
    }

    findPositionFromID(desired_id) {
        return new Promise( (resolve, reject) => {
            job_listing.findOne({ where: 
                {jid: desired_id} })
            .then(data => {
                if(data) {
                    resolve(data);
                }

                reject('nothingfound');
            });
        })
    }

    findCompanyFromID(desired_id) {
        return new Promise( (resolve, reject) => {
            job_listing.findOne({ where: 
                {jid: desired_id} })
            .then(data => {
                if(data) {
                    resolve(data);
                }

                reject('nothingfound');
            });
        })
    }

    findCompanyFit(company1, company2, company3, company4, company5) {
        return new Promise( (resolve, reject) => {
            job_listing.findAll(
                {
                    where: {
                        $or: [{company: {$eq: company1}},
                            {company: {$eq: company2}},
                            {company: {$eq: company3}},
                            {company: {$eq: company4}},
                            {company: {$eq: company5}} ]
                    }
                }
            )
            .then(data => {
                if(data) {
                    resolve(data);
                }
                reject('nothingfound');
            });
        })
    }

    findJobsFromMajor(desiredMajor) {
        return new Promise( (resolve, reject) => {
            job_requirements.findAll({where: {major: desiredMajor}})
            .then(data=> {
                if(data) {
                    resolve(data);
                }
                reject('nothingfound');
            })
        })
    }

    findRequirementsFromID(_jid) {
        return new Promise( (resolve, reject) => {
            job_requirements.findOne({where: {jid: _jid}})
            .then(data => {
                if (data) {
                    resolve(data);
                }
                reject('nothingfound');
            })
        })
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
