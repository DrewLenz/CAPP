module.exports = (sequelize, type) => {
    const applicant_pitch = sequelize.define(  
        `applicant_pitch`, {

            uid: {
                   type: type.STRING,
                    primaryKey: true,
                    autoIncrement: true
            },
            pitch: type.STRING,
          
        }, {
            timestamps: false,
        });
return applicant_pitch;
}