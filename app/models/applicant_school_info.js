module.exports = (sequelize, type) => {
    const applicant_school_info = sequelize.define(  
        `applicant_school_info`, {

            uid: {
                   type: type.STRING,
                    primaryKey: true,
                    autoIncrement: true
            },
            school_name: type.STRING,
            school_city: type.STRING,
            school_state: type.STRING,
            major: type.STRING,
            minor: type.STRING,
            gpa: type.FLOAT,
            gpa_scale: type.FLOAT,
            grad_semester: type.STRING,
            grad_year: type.INTEGER
        }, {
            timestamps: false,
        });
return applicant_school_info;
}