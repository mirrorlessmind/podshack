const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Podcast extends Model {}

Podcast.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(400), 
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'podcast',
  }
);

module.exports = Podcast;