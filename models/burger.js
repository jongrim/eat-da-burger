module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define('burger', {
    burger: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return Burger;
};
