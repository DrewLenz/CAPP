module.exports = (sequelize, type) => {
    const job_requirements = sequelize.define(
        `job_requirements`, {
            jid: {
                type: type.STRING,
                primaryKey: true,
                autoIncrement: true
            },
            top_skill1: type.STRING,
            top_skill2: type.STRING,
            top_skill3: type.STRING,
            major: type.STRING,
            pitch: type.STRING,
            gpa: type.FLOAT,
            other_skills: type.STRING,
            location: type.STRING
        }, {
            timestamps: false,
        }
    );
    return job_requirements;
}