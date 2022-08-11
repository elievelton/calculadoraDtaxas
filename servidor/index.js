const { EmailJSResponseStatus } = require('@emailjs/browser');

(async()=>{
    const db = require('./db');
    const Usuario = require('./models/Usuario');
    const Plano = require('./models/Plano');
    const Empresa = require('./models/Empresa');
    const Taxas = require('./models/Taxas');
    const Recebimento = require('./models/Recebimento');
    
    await db.sequelize.sync();

    const novoUsuarios = await Usuario.create({
        nome:"Carlos Victor",
        email:"carlosvicto@gmail.com",
        senha:"123456",
    })

})();