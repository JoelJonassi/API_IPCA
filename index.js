/**
 * Project : Smart Rooms
 * Date : 30/10/2022
 * Authors : Joel Jonassi
 *          Rui Alves
 *          José Macedo
 * brief :  Script que permite simular uma api rest com todos os ficheiros ".json".
 */

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json")
const middleware = jsonServer.defaults()
const port = process.env.PORT || 3000;

server.use(middleware);
server.use(router);
server.listen(port);