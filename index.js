const express = require("express");
const http = require("http");
const path = require("path");
const cookieParser = require("cookie-parser");

const saveChecklist = require("./checklist/save_checklist");

let app = express();
let server = http.createServer(app);

server.listen(3030, function () {
  console.log("O servidor já pode ser acessado em http://localhost:3030");
});

//Session

//Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

//Bootstrap
app.use("/css", express.static("./bootstrap/css"));
app.use("/js", express.static("./bootstrap/js"));
app.use("/icon-font", express.static("./node_modules/bootstrap-icons/font"));

//Express
app.use(express.static(path.join(__dirname, "./public")));

//Rotas
app.post("/save-checklist", function (req, res) {
  res.cookie("cookieDatadia", req.body.datadia);
  res.cookie("cookieCaixa", req.body.caixa);
  res.cookie("cookieGalao", req.body.galao);
  res.cookie("cookieVaso", req.body.vaso);
  res.cookie("cookieBalde", req.body.balde);
  res.cookie("cookieGarrafa", req.body.garrafa);
  res.cookie("cookiePneu", req.body.pneu);
  res.cookie("cookiePiscina", req.body.piscina);
  res.cookie("cookiePocas", req.body.pocas);
  res.cookie("cookiePote", req.body.pote);
  res.cookie("cookieEntulho", req.body.entulho);
  res.cookie("cookieCalha", req.body.calha);

  console.log(req.cookies);

  res.redirect("/checklist");
});

app.get("/cookies", function (req, res) {
  res.json(req.cookies);
});

app.get("/load", function (req, res) {
    res.clearCookie("cookieDatadia");
    res.clearCookie("cookieCaixa");
    res.clearCookie("cookiePote");
    res.clearCookie("cookieGarrafa");
    res.clearCookie("cookieCalha");
    res.clearCookie("cookiePocas");
    res.clearCookie("cookieEntulho");
    res.clearCookie("cookieGalao");
    res.clearCookie("cookiePiscina");
    res.clearCookie("cookiePneu");
    res.clearCookie("cookieVaso");
    res.clearCookie("cookieBalde");

    res.redirect("/checklist");
});

app.get("/checklist", function (req, res, html) {
  res.sendFile(path.join(__dirname, "./checklist/checklist.html"));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});
