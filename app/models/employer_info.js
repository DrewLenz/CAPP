module.exports = (sequelize, type) => {
    const employer_info = sequelize.define(  
        `employer_info`, {

            uid: {
                   type: type.STRING,
                    primaryKey: true,
                    autoIncrement: true
            },
            company_name: type.STRING,
            first_name: type.STRING,
            last_name: type.STRING,
            position: type.STRING
        }, {
            timestamps: false,
        });
return employer_info;
}