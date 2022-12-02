const express = require('express')
const app = express()

const rota = require('../src/routes/route')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',rota)


app.listen(3000,() => {
    console.log("Servidor testeBanco funcionando!!!")
});