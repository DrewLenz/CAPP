// These are different endpoints that we can call
// import User from '../models/user';
import UserService from '../libs/UserService';
import isLoggedIn from '../utils/authentication';
module.exports = (app, passport) => {
    app.get('/test', async(req, res) =>  {
         try { 
                const users = new UserService();
                const data = await users.findByContactInfo();
                console.log(data);
                console.log(data[0].first_name);
              //  res.send(data);
           //   res.send(data[0].first_name)
                res.render('test.ejs', { data: data });
         }
         catch (err) {
             console.log(err)
             res.status(400).send(err);
         }


    });

}
