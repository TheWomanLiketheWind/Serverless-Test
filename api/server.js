// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('data.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

module.exports = (req, res) => {
  res.status(200).send(server)
}