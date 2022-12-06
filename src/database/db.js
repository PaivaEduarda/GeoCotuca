const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/web').then(e => console.log("Conected in MongoDB")).catch(e => console.log(e))
//127.0.0.1