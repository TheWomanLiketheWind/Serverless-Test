// server.js
const path = require('path')
const jsonServer = require('json-server')
const { Module } = require('module')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, '../data.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

Module.exports = server
module.exports = server