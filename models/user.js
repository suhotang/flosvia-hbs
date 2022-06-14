module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      email: { type: DataTypes.STRING(40), allowNull: false, unique: true },
      password: { type: DataTypes.STRING(100), allowNull: false },
      name: { type: DataTypes.STRING(15), allowNull: false, unique: false },
    },
    { timestamps: true, paranoid: true }
  )
}
