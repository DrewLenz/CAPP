module.exports = (sequelize, type) => {
    const job_listing = sequelize.define(  
        `job_listing`, {

            jid: {
                   type: type.STRING,
                    primaryKey: true,
                    autoIncrement: true
            },
            position: type.STRING,
            company: type.STRING,
            timestamp: type.STRING,
            id: type.INTEGER
        }, {
            timestamps: false,
        });
return job_listing;
}