'use strict';
module.exports = (sequelize, DataTypes) => {
  const Upvote = sequelize.define('Upvote', {
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {});
  Upvote.associate = function(models) {
    // associations can be defined here
  };
  return Upvote;
};