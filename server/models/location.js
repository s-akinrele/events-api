'use strict';
module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define('Location', {
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    address: DataTypes.STRING,
    capacity: {
      type: DataTypes.INTEGER,
      defaultValue: 100
    }
  });

  Location.associate = function(models) {
    Location.hasMany(models.Event, {
      foreignKey: 'locationId',
      onDelete: 'CASCADE'
    });
  }
  return Location;
};