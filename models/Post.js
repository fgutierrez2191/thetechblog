const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create our post model
class Post extends Model {}


// create fields/columns for Post model
Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
        }
      },

    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );


  module.exports = Post;