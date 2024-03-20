const express = require('express');
const http = require('http');
const path = require('path');
const cookieParser = require('cookie')

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
    res.send(req.body.datadia);
    console.log(req.body.datadia);
    console.log(req.body.caixa);
    console.log(req.body.galao);
    console.log(req.body.vaso);
    console.log(req.body.balde);
});

app.get('/cookie',function(req, res){
    let minute = 60 * 1000;
    res.cookie(cookie_name, 'cookie_value', { secure: true });
    return res.send('cookie has been set!');
});

app.get('/checklist', function(req,res,html) {
    console.log('checklist');
    res.sendFile(path.join(__dirname, './checklist/checklist.html'));
});

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, './index.html'));
});