const express = require('express')
const app = express();
const rota = require('../src/routes/route')

app.set('views', '../views')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/', rota)

app.listen(8080, () => {
    console.log('servidor geoCotuca funcionando')
})