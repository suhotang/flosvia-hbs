module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      email: { type: DataTypes.STRING(40), allowNull: false, unique: true },
      password: { type: DataTypes.STRING(100), allowNull: false },
      name: { type: DataTypes.STRING(15), allowNull: false },
      is_first: { type: DataTypes.BOOLEAN, defaultValue: true },
      birth: { type: DataTypes.DATE, allowNull: true },
    },
    { paranoid: true }
  )
}
