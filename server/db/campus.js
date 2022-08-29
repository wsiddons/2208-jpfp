const Sequelize = require('sequelize')
const db = require('./database')

const campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/05/spongebob.jpg?w=1000&h=600&crop=1'
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    }
})

module.exports = campus