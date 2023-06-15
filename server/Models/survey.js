const db = require('./database')
const{DataTypes} = require ('sequelize')


const Survey = db.define('survey', {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        
    },
    name: DataTypes.STRING,
    coreValues: DataTypes.STRING,
    imposterq: DataTypes.BOOLEAN,
    distractionsq: DataTypes.BOOLEAN,
    procrastinateq: DataTypes.STRING,
    organizedq: DataTypes.STRING,
    stayontaskq: DataTypes.STRING,
    interruptingq: DataTypes.STRING

})

module.exports=Survey