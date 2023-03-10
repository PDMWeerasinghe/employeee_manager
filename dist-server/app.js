"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _index = _interopRequireDefault(require("./routes/index"));
var _employee = _interopRequireDefault(require("./routes/employee"));
var _models = _interopRequireDefault(require("./models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use((0, _cors["default"])(corsOptions));
_models["default"].sequelize.sync().then(function () {
  console.log("Synced db.");
})["catch"](function (err) {
  console.log("Failed to sync db: " + err.message);
});
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public')));
app.use('/', _index["default"]);
app.use('/api', _employee["default"]);
var _default = app;
exports["default"] = _default;