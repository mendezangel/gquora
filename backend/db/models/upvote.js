'use strict';
module.exports = (sequelize, DataTypes) => {
  const Upvote = sequelize.define('Upvote', {
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {});
  Upvote.associate = function (models) {
    // associations can be defined here
    Upvote.belongsTo(models.Question, { foreignKey: 'questionId' });
    Upvote.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Upvote;
};