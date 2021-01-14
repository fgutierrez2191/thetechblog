const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create our post model
class Comment extends Model {}


// create fields/columns for Post model
Comment.init(
    {

      body: {
        type: DataTypes.STRING,
        allowNull: false,
        }
      },

    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'Comment'
    }
  );


  module.exports = Comment;