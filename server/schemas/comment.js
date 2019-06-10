/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comment', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pageid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    context: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'comment'
  });
};
