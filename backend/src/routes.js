const express = require('express')
const routes = express.Router()

const OngControllers = require('./controllers/OngController')
const IncidentControllers = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')



routes.post('/session',SessionController.create)
routes.get('/profile', ProfileController.index)

routes.get('/ongs',OngControllers.index)
routes.post('/ongs', OngControllers.create)


routes.post('/incidents', IncidentControllers.create)
routes.get('/incidents', IncidentControllers.index)
routes.delete('/incidents/:id', IncidentControllers.delete)


module.exports = routes