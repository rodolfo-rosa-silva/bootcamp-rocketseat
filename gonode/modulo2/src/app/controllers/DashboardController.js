const { User, Appointment } = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");

class DashboardController {
  async index(req, res) {
    // verifica se o usuario logado é um prestador
    // se for verdadeiro, carrega uma view especifica para providers
    if (req.session.user.provider === true) {
      const appointments = await Appointment.findAll({
        include: [{ model: User, as: "user" }],
        where: {
          provider_id: req.session.user.id,
          date: {
            [Op.between]: [
              moment()
                .startOf("day")
                .format(),
              moment()
                .endOf("day")
                .format()
            ]
          }
        }
      });
      return res.render("dashboardProvider", { appointments });
    } else {
      const providers = await User.findAll({ where: { provider: true } });
      return res.render("dashboard", { providers });
    }
  }
}

module.exports = new DashboardController();
