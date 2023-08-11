const express               = require("express");
const cors                  = require("cors");
// const html                  = require("html");
const ativ                  = require("./scripts/activity");
const app = new express();


const corsConfig = {
    origin: ['http://172.19.201.20:5500', 'about:blank'],

};

app.use(cors());

//Generate
app.get("/", (req, res) => {
    text = `
    <a href="atividade1">Atividade 1</a>
    `;
    res.send(text);
})

app.use("/home", (req, res) => {
    res.render(__dirname + '/pages/index.html', {name:"João"});
})

app.get("/atividade1", ativ.Atividade1);

app.listen(port = 3000, () => {

})