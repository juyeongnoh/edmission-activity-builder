const sequelize = require("../config/database");
const User = require("./User");
const Activity = require("./Activity");

// Associations
User.hasMany(Activity, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Activity.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = {
  sequelize,
  User,
  Activity,
};
