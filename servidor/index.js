const { EmailJSResponseStatus } = require('@emailjs/browser');

(async()=>{
    const db = require('./db');
    const Usuario = require('./models/Usuario');
    const Plano = require('./models/Plano');
    const Empresa = require('./models/Empresa');
    //const Taxas = require('./models/Taxas');
    //const Recebimento = require('./models/Recebimento');
    
    await db.sequelize.sync();

    const novoUsuarios = await Usuario.create({
        nome:"Carlos Victor",
        email:"carlosvicto@gmail.com",
        senha:"123456",
    })
    const novaEmpresa = await Empresa.create({
        nome:"Ton",
        notaReclameAqui: 8.6,
        melhoremque:"Melhor no Débito"

    })

    const novoPlano = await Plano.create({
        nome:"Plano 1",
        nome_qtd_dias:"14",
        pessoa:"Fisica",
        fatordetaxa:1.5,
        debito:1.1,
        Credito:4.6,
        Credito2x:6.0,
        Credito3x:7.0,
        Credito4x:8.0,
        Credito5x:9.0,
        Credito6x:10.0,
        Credito7x:11.0,
        Credito8x:12.0,
        Credito9x:13.0,
        Credito10x:14.0,
        Credito11x:15.0,
        Credito12x:16.0,
        EmpresaId:novaEmpresa.id,
    }) 
    
    const novoPlano2 = await Plano.create({
        nome:"Plano 2",
        nome_qtd_dias:"14",
        pessoa:"Fisica",
        fatordetaxa:1.5,
        debito:1.1,
        Credito:4.6,
        Credito2x:6.0,
        Credito3x:7.0,
        Credito4x:8.0,
        Credito5x:9.0,
        Credito6x:10.0,
        Credito7x:11.0,
        Credito8x:12.0,
        Credito9x:13.0,
        Credito10x:14.0,
        Credito11x:15.0,
        Credito12x:16.0,
        
        EmpresaId:4,
    })  

})();
