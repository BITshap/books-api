const express = require ('express')
var cors = require('cors')
const methodOverride = require('method-override')
const mongoose = require ('mongoose')
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
const app = express()



mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log('connected to mongo at: ', process.env.MONGO_URI)})

app.get('/', (req, res, next) => {
    console.log("Hello World")
})



app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(cors())
//books
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

//Starter Route



app.listen(PORT, function () {
    console.log('CORS-enabled web server listening on port', PORT);
  })



