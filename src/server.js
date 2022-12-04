require('./database/db')
const express = require('express')
const path = require('path')
const siteRoutes = require('./routes/site.routes')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/public', express.static(path.resolve(__dirname, '..', 'public')))
app.use(siteRoutes)

app.listen(8080, () => {
    console.log('servidor geoCotuca funcionando: 8080')
})