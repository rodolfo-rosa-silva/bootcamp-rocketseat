const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define("Appointment", {
    date: {
      type: DataTypes.DATE,
      get() {
        const date = this.getDataValue("date");
        return moment(date).format("DD/MM/YYYY HH:mm");
      }
    }
  });

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { as: "user", foreignKey: "user_id" });
    Appointment.belongsTo(models.User, {
      as: "provider",
      foreignKey: "provider_id"
    });
  };

  return Appointment;
};
