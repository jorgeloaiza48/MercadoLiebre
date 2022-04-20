//importanto express y path
const express = require('express')
const app = express()
const path = require('path')

//para configurar la carpeta "public" como archivos públicos y express sepa
const publicPath = path.resolve(__dirname,'./public')
app.use(express.static(publicPath))

// const publicPathStatic = path.resolve(__dirname,'./static')
// app.use(express.static(publicPathStatic))

//defiendo el puerto y levantando el servidor en dicho puerto
// let puerto = 3000
// app.listen(puerto,() => console.log("Servidor corriendo en el puerto ---> "+ puerto))//escucha en el puerto especificado

//configuración para montar en Heroku
app.listen(process.env.PORT || 3030, ()=> console.log("Server is running..."))

//implementamos el requerimiento del recurso en la raiz o root '/'
app.get('/',(req,res) => {res.sendFile(path.resolve(__dirname,'./views/home.html'))})

app.get('/register.html',(req,res) => {res.sendFile(path.resolve(__dirname,'./views/register.html'))})
app.get('/login.html',(req,res) => {res.sendFile(path.resolve(__dirname,'./views/login.html'))})

