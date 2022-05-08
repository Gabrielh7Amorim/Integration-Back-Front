const { Sequelize } = require('./db');
const db = require('./db')

const Usuario = db.sequelize.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    }
})

module.exports = Usuario;  

//Usuario.sync({force: true})