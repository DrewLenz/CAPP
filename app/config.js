import dotenv from 'dotenv';
dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || `development`;
export const PORT = process.env.PORT || 4000;
export const MONGO_URL  = process.env.MONGO_URL || `mongodb://localhost:27017/slam-mail`;


export const ADMIN_FIRST_NAME = process.env.ADMIN_FIRST_NAME;
export const ADMIN_LAST_NAME = process.env.ADMIN_LAST_NAME;
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
export const ADMIN_PWD = process.env.ADMIN_PWD;







export const SEQ_DBNAME = process.env.SEQ_DB;
export const SEQ_USER = process.env.SEQ_USER;
export const SEQ_PWD = process.env.SEQ_PWD;
export const SEQ_HOST = process.env.SEQ_HOST;