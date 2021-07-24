module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        },
        author_id: {
            type: Sequelize.INTEGER
        }
    });

    Tutorial.associate = function(models) {
        Tutorial.belongsTo(models.authors, {
            foreignKey: 'author_id'
        });
    };

    return Tutorial;
};