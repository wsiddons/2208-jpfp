const Sequelize = require('sequelize')
const db = require('./database')
const campus = require('./campus')

const student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        valitdate: {
            isEmail: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://lastfm.freetls.fastly.net/i/u/ar0/a771c29d9ee82c2e9455211bddcc5a84.jpg'
    },
    gpa: {
        type: Sequelize.DECIMAL,
        validate: {
            min: 0,
            max: 4
        }
    }
})

student.hasOne(campus)
campus.hasMany(student)

module.exports = student