const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

/*
Tipos de Parametros:
Query Params: parametros nomeados enviados na rota apos o ? (filtros, paginaçao)
Route Params: utilizados para identificar recursos
Request Body: corpo da requisição, utilizado para criar ou alterar recursos
*/

app.listen(3333)
