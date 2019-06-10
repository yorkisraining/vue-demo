/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adminuser', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'adminuser'
  });
};
