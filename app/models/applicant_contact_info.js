module.exports = (sequelize, type) => {
    const applicant_contact_info = sequelize.define(  
        `applicant_contact_info`, {

            uid: {
                   type: type.STRING,
                    primaryKey: true,
                    autoIncrement: true
            },
            first_name: type.STRING,
            last_name: type.STRING,
            email: type.STRING,
            phone_number: type.STRING,
            street_address_line1: type.STRING,
            street_address_line2: type.STRING,
            city: type.STRING,
            state: type.STRING,
            zipcode: type.STRING,
            id: type.INTEGER
        }, {
            timestamps: false,
        });
return applicant_contact_info;
}