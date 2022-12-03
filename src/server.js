const express = require('express')
const path = require('path')
const rota = require('./routes/site.router')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/public', express.static(path.resolve(__dirname, 'view')))
app.use('/', rota)

app.listen(8080, () => {
    console.log('servidor geoCotuca funcionando')
})