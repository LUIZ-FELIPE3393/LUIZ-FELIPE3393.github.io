const express = require('express');
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');

const saveChecklist = require('./checklist/save_checklist');

let app = express();
let server = http.createServer(app);

server.listen(3030, function() {
    console.log('O servidor já pode ser acessado em http://localhost:3030');
});

//Session


//Bodyparser
    app.use(express.urlencoded({extended: false}))
    app.use(express.json());
    app.use(cookieParser());

//Bootstrap
    app.use('/css', express.static('./bootstrap/css'));
    app.use('/js', express.static('./bootstrap/js'));
    app.use('/icon-font', express.static('./node_modules/bootstrap-icons/font'));

//Express
    app.use(express.static(path.join(__dirname, './public')));

//Rotas
app.post('/save-checklist', function(req, res) {    
    console.log(req.body.datadia);
    res.cookie("cookieDatadia", req.body.datadia);

    console.log(req.body.caixa);
    res.cookie("cookieCaixa", req.body.caixa);

    console.log(req.body.galao);
    res.cookie("cookieGalao", req.body.galao);

    console.log(req.body.vaso);
    res.cookie("cookieVaso", req.body.vaso);

    console.log(req.body.balde);
    res.cookie("cookieBalde", req.body.balde);
    
    console.log(req.body.pocas);
    res.cookie("cookiePocas", req.body.pocas);

    console.log(req.cookies);

    res.redirect('/checklist');
});

app.get('/cookies',function(req, res){
    res.json(req.cookies);
});

app.get('/checklist', function(req,res,html) {
    console.log('checklist');
    res.sendFile(path.join(__dirname, './checklist/checklist.html'));
});

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, './index.html'));
});