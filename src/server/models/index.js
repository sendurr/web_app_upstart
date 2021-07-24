const { Sequelize } = require('sequelize');
import config from "config";
import tutorials from "./tutorial"

const sequelize = new Sequelize(config.get("pgDb.database"), config.get("pgDb.username"), config.get("pgDb.password"), {
    host: config.get("pgDb.host"),
    dialect: config.get("pgDb.dialect")
});

const db = {};

db.tutorials = tutorials(sequelize, Sequelize);
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default  db;