const express = require('express') //importa o módulo express
const controller = require('./controller/controller')
const app = express() //cria variavel app com funcionalidades express

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
// app.use(express.static('./imagens'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/css', express.static('./styles'));
app.use(express.static("styles")); 

const routes = require('./routes');

app.use(routes)

// app.get('/',(req, res)=>{
//     res.send('hello word!') //A função get recebe uma requisição do front end e devolve uma resposta para o mesmo.
//     //A função get recebe uma requisição do front end e devolve uma resposta para o mesmo.
//     //A função get recebe dois parâmetros. O primeiro se refere a URL requisitada pelo fonr-end, nesse caso será: http://localhost/.

// })

// app.get('/verificarLogin', controller.verificarLogin)

// app.get('/usuarios', controller.getUsuarios)

// app.post('/incluirUsuario', controller.incluirUsuario)

// app.get('/home',(req, res)=>{
//     res.sendFile("C:\\Users\\u22120\\Desktop\\GeoCotuca-7b5bcce5c024210aae9dc44b4e5ac8b675e3cf9e\\pfTrabalho\\home.html")
// })

// app.listen(1234,()=>{
//     let data = new Date()
//     console.log('ycd')
// })


module.exports = app;