module.exports = (sequelize, Sequelize) => {
    const Author = sequelize.define("authors", {
        name: {
            type: Sequelize.STRING
        }
    });

    Author.associate = function(models) {
        Author.hasMany(models.tutorials, {
            foreignKey: 'author_id',
            as: 'authorId'
        });
    };

    return Author;
};