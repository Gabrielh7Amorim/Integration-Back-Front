const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Usuario = require('./models/Usuarios');

// Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')    
    app.use('/public', express.static(__dirname + '/public'));

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

 
// Rotas
    app.get('/cad', function(req, res){
        Usuario.findAll({oreder: [['id', 'DESC']]}).then(function(usuarios){
            res.render('form', {usuarios: usuarios})
        })
        
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