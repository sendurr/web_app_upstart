const { Sequelize } = require('sequelize');
import config from "config";
import tutorial from "./tutorial";
import author from "./authors";

const sequelize = new Sequelize(config.get("pgDb.database"), config.get("pgDb.username"), config.get("pgDb.password"), {
    host: config.get("pgDb.host"),
    dialect: config.get("pgDb.dialect")
});

const db = {};

db.tutorial = tutorial(sequelize, Sequelize);
db.author = author(sequelize, Sequelize);
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.author.associate = function(models) {
    db.author.hasMany(db.tutorial, {
        // foreignKey: 'author_id',
        as: "tutorials"
    });
// };

// db.tutorial.associate = function(models) {
    db.tutorial.belongsTo(db.author, {
        foreignKey: 'authorId',
        as: "authors"
    });
// };

export default  db;