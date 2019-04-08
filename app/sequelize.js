import Sequelize from "sequelize";
import applicant_contact_infoModel from "./models/applicant_contact_info.js";
import applicant_skills_Model from "./models/applicant_skills.js";
import applicant_pitch_Model from "./models/applicant_pitch.js";
import applicant_school_infoModel from "./models/applicant_school_info.js";
import employer_infoModel from "./models/employer_info.js";
import job_listing_Model from "./models/job_listing.js";
import skill_mapModel from "./models/skill_map.js";

import {
    SEQ_HOST,
    SEQ_DBNAME,
    SEQ_USERNAME,
    SEQ_PASSWORD
} from "./config.js";

const sequelize = new Sequelize(
  "sd_master",
  "sensam",
  "Toaster59!",
/*    SEQ_DBNAME,
    SEQ_USERNAME,
    SEQ_PASSWORD, */
    {
       // host: SEQ_HOST,
        host: "seniordesign24.database.windows.net",
        dialect: `mssql`,
        driver: 'tedious',
        pool: {
            max: 10,
            min: 0,
            acquire: 70000,
            idle: 20000
        },
        dialectOptions: {
          // instanceName: 'MSSQLSERVER2018'
             encrypt: true,
             port: 1433
         }
    }
);

// export const User = UserModel(sequelize, Sequelize);
export const applicant_contact_info = applicant_contact_infoModel(sequelize, Sequelize);
export const applicant_skills = applicant_skills_Model(sequelize, Sequelize);
export const applicant_pitch = applicant_pitch_Model(sequelize, Sequelize);
export const applicant_school_info = applicant_school_infoModel(sequelize, Sequelize);
export const employer_info = employer_infoModel(sequelize, Sequelize);
export const job_listing = job_listing_Model(sequelize, Sequelize);
export const skill_map = skill_mapModel(sequelize, Sequelize);





sequelize
  .sync({ force: false})
  .then(() => {
    console.log('Connection has been established successfully. :)');
    return;
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  }); 