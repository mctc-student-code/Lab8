const express =require('express') // import express library

const path = require('path') // import path libary
 const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const app = express() //create express app

app.use(bodyParser.urlencoded({extended:false}))


app.set('views',path.join(__dirname,'views')) // tells the app where to find the view template

app.set('view engine', 'hbs') // setting the hbs as the view engine
app.use(express.static(path.join(__dirname, 'public')))

app.use('/',indexRouter)

let server = app.listen(process.env.PORT ||3000,function(){
    console.log('sever running' ) // starting the server and make sure its listening to any requests
})