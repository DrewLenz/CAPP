// These are different endpoints that we can call
// import User from '../models/user';
import UserService from '../libs/UserService';
import isLoggedIn from '../utils/authentication';
module.exports = (app, passport) => {
    app.get('/applicantskill', async(req, res) =>  {
         try { 
                const users = new UserService();
                const skill = await users.findBySkill();
                console.log(skill);
                console.log('got herezzzzz');
                console.log(skill[0].top_skill1);
                
           //     console.log(data[0].first_name);
              //  res.send(data);
           //   res.send(data[0].first_name)
                res.render('applicantskill.ejs', {skill:skill });
         }
         catch (err) {
             console.log(err)
             res.status(400).send(err);
         }


    });
 
}
