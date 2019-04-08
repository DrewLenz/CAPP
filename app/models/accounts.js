module.exports = (sequelize, type) => {
    const account = sequelize.define(  
        `account`, {

            id: {
                   type: type.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
            },
            uid: type.STRING,
            password: type.STRING,
            email: type.STRING,
            account_type: type.STRING
          
        }, {
            timestamps: false,
        });
return account;
}