const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Usuario = require('./models/Usuarios');
const { render } = require("express/lib/response");

// Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')    
    app.use('/public', express.static(__dirname + '/public'));

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

 
// Rotas
    app.get('/cad', async(req, res)=>{
        Usuario.findAll({ordered: [['id', 'DESC']]}).then(function(user){
           res.render('form', {usuarios: user});
        })  

        // await Usuario.findByPk(2)
        //     .then((usuarios) => {
        //         return res.render('form', {usuarios:usuarios})
        //     }).catch(() => {
        //         return res.status(400).json({
        //             erro: true,
        //             mensagem: "Erro: nenhum valor encontrado para pagina home!"
        //         });
        //     });

        // const clienteAlterar = await Cliente.Cliente.findByPk(1);
        // clienteAlterar.nome = "Gabriel Henrique"
        // const resultadoSave = await clienteAlterar.save();
        // console.log(resultadoSave);

    })

    app.post('/busca', async(req, res)=>{
       await Usuario.findByPk(req.body.pk).then(function(user){
            i = user.id;
            n = user.nome;
            e = user.email;
            res.render('edit', {i,n,e});
        }).catch(function(erro){
    //a definir
        })
    })

    app.get('/alt', async(req, res)=>{
        const clienteAlterar = await Usuario.findByPk(req.body.pk);
        
        console.log(clienteAlterar);

    })

    app.post('/add', function(req, res){
        Usuario.create({
            nome: req.body.nome,
            email: req.body.email
        }).then(function(){
            res.redirect('/cad')
        }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        })
    })
    app.get('/deletar:id', function(req, res){
        Usuario.destroy({where: {'id': req.params.id}}).then(function(){
            res.redirect('/cad')
        }).catch(function(erro){
            res.send("Esta postagem não existe!")
        })
    })
    



app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});