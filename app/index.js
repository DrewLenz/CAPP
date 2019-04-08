import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session'; // ^ all these imports are for parsing data and cookies and stuff
//import mongoose from 'mongoose';
//import connectMongo from 'connect-mongo';
//const MongoStore = connectMongo(session);
import passport from 'passport'; // a simple, unobtrusive authentication library for authentication login
import flash from 'connect-flash'; 
//import sequelize from 'sequelize';
import {NODE_ENV, PORT} from './config.js';


//mongoose.connect(MONGO_URL, {useNewUrlParser: true});
require(`./utils/passport`)(passport); // require passport to be used

let app = express(); // Initializing express js

// Setting all parsing
app.use(morgan(`dev`));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

// Tells to use embedded js as front end
app.set(`view engine`, `ejs`);

// Creates a session
app.use(session({
    secret: `sometextstring`,
    saveUninitialized: true,
    resave: true,
    //store: new MongoStore({mongooseConnection: mongoose.connection})
}));

// Initialize passport and session
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Flash used to store error or success messages
app.use(flash()); // use connect-flash for flash messages stored in session

// Logging the session and the user
// "Middleware" this is run everytime there is a request
// Tis will end up deleted, used only for testing log in purposes
app.use(function(req, res, next) {
    console.log(req.session); // eslint-disable-line
    console.log(`===================`); // eslint-disable-line
    console.log(req.user); // eslint-disable-line
    next();
});

// "Did some magic"
// routes/index file
// Reading directory and for each file that's not index.js, it is requireing this file
// w/o this you would have to require every single routes file individually
require(`./routes`)(app, passport);

// Make server listen
app.listen(PORT, () => console.log(`App listening on port ` + PORT + ` in ` + NODE_ENV + ` mode!`)); // eslint-disable-line

/* 
    Basically have to initialize static directory, Eric calls it "Public" or "Assets"
        In Public:
            any images we are rendering
            any javascript we're using for front end design (transitions, dropdown, etc.)
            CSS stylesheets
    Views would contain the "skeleton" of a page
    At same level as a/pp and views folders
    This is all the EJS (so CSS and JS for front end)
    Backend will be protected somehow
*/
//db connection


