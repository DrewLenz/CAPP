module.exports = (sequelize, type) => {
    const applicant_skills = sequelize.define(  
        `applicant_skill`, {

            uid: {
                   type: type.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
            },
            top_skill1: type.STRING,
            top_skill2: type.STRING,
            top_skill3: type.STRING,
            other_skills: type.STRING
        }, {
            timestamps: false,
        });
return applicant_skills;
}
