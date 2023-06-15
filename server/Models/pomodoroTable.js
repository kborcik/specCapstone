const {DataTypes} = require('sequelize')
const db = require('./database')
module.exports = {

    Pomodoro: db.define("pomodoro", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER
        } ,
        

    })
}