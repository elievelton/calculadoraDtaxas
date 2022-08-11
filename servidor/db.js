const Sequelize = require("sequelize");

const sequelize = new Sequelize("bd_calc_taxas", "root", "12345", {
  host: "localhost",
  dialect: "mysql",
  define:{
    charset: "utf8",
    collate: "utf8_general_ci",
    timestamp: true,
  },
  logging: false,
});

sequelize
  .authenticate().then(()=>{
    console.log("Conexão ao BD feita com sucesso!")
  }).catch((err)=>{
    console.log("Problema ao conectar no banco de dados erro:"+err)
  });

module.exports = {sequelize, Sequelize};
