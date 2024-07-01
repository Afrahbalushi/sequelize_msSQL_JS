const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('testdb', 'sa', 'root', {
  host: 'localhost',
  dialect: 'mssql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, DataTypes);

module.exports = db;
