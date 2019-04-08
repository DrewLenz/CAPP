module.exports = (sequelize, type) => {
    const skill_map = sequelize.define(  
        `skill_map`, {

            id: {
                   type: type.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
            },
            uid: type.STRING,
            skill: type.STRING
          
        }, {
            timestamps: false,
        });
return skill_map;
}