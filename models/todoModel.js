
module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define("todo", {
        username: {
            type: Sequelize.STRING
        },
        todoTital: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        }
    });
  
    return Todo;
};