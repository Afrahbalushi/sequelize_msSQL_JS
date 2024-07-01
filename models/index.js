const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('testdb', 'sa', 'root', {
  host: 'localhost',
  dialect: 'mssql',
  timezone: '+04:00'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, DataTypes);

module.exports = db;
