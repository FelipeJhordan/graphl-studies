"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _expressGraphql = require("express-graphql");
var _resolver = require("./presentation/resolver");
var _tasks = _interopRequireDefault(require("./data/tasks.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var port = 4000;
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.get('/', function (request, response) {
  response.send('Hello, GraphQL!');
});
app.use('/todo', (0, _expressGraphql.graphqlHTTP)({
  schema: _resolver.graphlServer,
  context: {
    tasks: _tasks["default"]
  }
}));
app.listen(port, function () {
  console.log("Running a server at http://localhost:".concat(port));
});