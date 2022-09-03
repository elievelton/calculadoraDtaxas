const sequelize = require("sequelize");
const models = require("../models");
const usuario = require("../models/usuario");
const Usuario = models.Usuario;

module.exports = {
  async create(req, res, next) {
    try {
      const { nome } = req.body;
      const { senha } = req.body;
      const { email } = req.body;
      const { tipo } = req.body;
      const Usuario = await usuario.create({
        nome,
        senha,
        email,
        tipo,
      });
      return res.json({
        msg: "Usuario cadastrado com sucesso no banco de dados!!!",
      });
    } catch (error) {
      return res.json({ msg: "usuario não foi cadastro" + error });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome } = req.body;
      const { senha } = req.body;
      const { email } = req.body;
      const { tipo } = req.body;
      const Usuario = await usuario.update(
        {
          nome,
          senha,
          email,
          tipo,
        },
        { where: { id } }
      );
      return res.json({
        msg: "Usuario alterado com sucesso no banco de dados!!!",
      });
    } catch (error) {
      return res.json({ msg: "usuario não foi alterado" + error });
    }
  },

  async  findAll(req, res) {
    try {
      const { page } = req.params;
      const limite = 5;
      const Usuario = await usuario.findAndCountAll({
        order: ["id", "ASC"],
        limit: limite,
        offSet: parseInt(page),
      });
      return res.json(Usuario);
    } catch (error) {
      return res.json("Erro para listar usuarios" + error);
    }
  },
};
