const bcrypt = require("bcrypt");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true,
            } 
        },
        phone: {
            type: Sequelize.BIGINT
        },
        userRole: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    },  {
            freezeTableName: true,
            instanceMethods: {
                generateHash(password) {
                    return bcrypt.hash(password, bcrypt.genSaltSync(8));
                },
                validPassword(password) {
                    return bcrypt.compare(password, this.password);
                }
            }
        
        });
  
    return User;
}