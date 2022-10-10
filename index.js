//Require Modules To Make HTTP Server
const express = require("express");
const app = express();
const routes= require('./routes/routes')
const con = require('./db/config.db')
const path = require('path');
var cors = require('cors')
//Setting ***************************************************

app.set('port',process.env.PORT||9000)

/*Middlewares******************************************** */
app.use(con);//Get MySQL CONNECTION to Operation from file ./db/db.config.js
app.use(express.json());//Allow response in JSON Format
app.use(express.urlencoded({extended: true}));//Allow body analyze of JSON reques
app.use(cors())
    //Permitir uso de esta ruta
app.use(express.static(path.join(__dirname,'temp/images')))


//Routes***************************************************
app.get('/',(req,res)=>{
    res.send('Welcome to Puertas Del Cielo API');
})

app.use('/api/v1',routes)
//Running *************************************************
app.listen(app.get('port'),() => {
    console.log("Server Running on Port: ",app.get('port'));
});

module.exports = app;