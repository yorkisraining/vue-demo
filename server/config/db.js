const Sequelize = require('sequelize');

const Todolist = new Sequelize('mysql://root:admin123456@localhost/blog', {
    define: {
        timestamps: false
    }
})

module.exports = {
    Todolist
}