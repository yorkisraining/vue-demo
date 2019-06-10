/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pagelist', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    brief: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    context: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'pagelist'
  });
};
