// These are different endpoints that we can call
// import User from '../models/user';
import UserService from '../libs/UserService';
import isLoggedIn from '../utils/authentication';
module.exports = (app, passport) => {
    app.get('/test', async(req, res) =>  {
         try { 
                const users = new UserService();
                const data = await users.findAllContactInfo();
                const results = [];

                // Get stuff by ID
                for (const contactInfo of data) {
                    const skills = await users.findSkillFromID(contactInfo.uid);
                    const schoolInfo = await users.findSchoolInfoFromID(contactInfo.uid);
                    const pitch = await users.findPitchFromID(contactInfo.uid); 
                    results.push({contactInfo, skills, schoolInfo, pitch});
                }

                res.render('test.ejs', { data: data, userStuff: results });
         }
         catch (err) {
             console.log(err)
             res.status(400).send(err);
         }
    });

}
