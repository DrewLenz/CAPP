// These are different endpoints that we can call
// import User from '../models/user';
import UserService from '../libs/UserService';
import isLoggedIn from '../utils/authentication';
module.exports = (app, passport) => {

    // Get is from URL to render a new page
    // Knows to render from views directory
    // On index page, there is no data being sent
    app.get(`/`, isLoggedIn, async (req, res) => {
        res.render(`index.ejs`);
    });

    app.get(`/login`, async (req, res) => {
        res.render(`login.ejs`, {message: req.flash(`loginMessage`)});
    });

    // Comes from forms 99% of the time, when setting data and posting to database
    app.post(`/login`, passport.authenticate(`local`, {
        successRedirect: `/`,
        failureRedirect: `/login`,
        failureFlash: true
    }));

    app.get(`/signup`, async (req, res) => {
        res.render(`signup.ejs`, {message: ``});
    });

    app.post(`/signup`, async (req, res) => {
        const service = new UserService();
        const user = await service.findByEmail(req.body.email);
        if (user) {
            res.redirect(`/signup?error=true`);
        } else {
            await service.createUser(req.body.email, req.body.password);
        }

        res.redirect(`/`);
    });

    //other routes..
    app.get(`/createApplicant`, async(req, res) => {
        res.render(`createApplicant.ejs`, {message: ``});
    });

    // TODO: Create app.post for creating profile
};
