//dotenv nos permite leer las variables de entorno de nuestro .env
const dotenv = require("dotenv");
dotenv.config();

//Importar modulo MYSQL
const mysql = require('mysql');

const myconn = require('express-myconnection');

//Creación de Variable de conexion para operaciones con DB
let con;

const dbenv={
    host: process.env.DBHOST,//Servidor
    user: process.env.DBUSER,//Usuario
    password: process.env.DBPASS,//Contraseña
    database: process.env.DBNAME//Nombre de Base de Datos

//         //Esta Información se encuentra en nuestro archivo
//         //de variables de Entorno .env
}

try {
    con=myconn(mysql,dbenv,'single');
}
catch (error) 
{
    //En caso de error Mostrar este mensaje por consola
    console.log("Error al conectar con la base de datos");
}

module.exports =  con ;