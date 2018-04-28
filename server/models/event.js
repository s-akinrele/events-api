'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    time: DataTypes.DATE
  });

  Event.associate = function(models) {
    Event.belongsTo(models.Location, {
      foreignKey: 'locationId',
      onDelete: 'CASCADE'
    });
  }
  return Event;
};