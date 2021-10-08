var express = require("express");
var app = express();
const connection = require("./database/database.js");

connection
    .authenticate()
    .then(()=>{
        console.log("conexao ok");
    })
    .catch((msgErro)=>{
        console.log("msgErro")
    })

app.set('view engine','ejs');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true}))
app.use(express.json())


app.get("/", (req,res)=>{
    res.render("index");
})
app.get("/cadastro", (req,res)=>{
    res.render("cadastro");
})
app.post("/cadastrado", (req,res)=>{
    var name = req.body.nome;
    res.send("CADASTRO REALIZADO! NOME " + name + " " );
})

app.listen(8080, function(erro){
    if (erro)
        {console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor Rodando")
    }
})

