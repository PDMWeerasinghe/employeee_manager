"use strict";

var express = require('express');
var _require = require('../controller/Employee'),
  getEmployees = _require.getEmployees,
  createEmployee = _require.createEmployee,
  getEmployeeById = _require.getEmployeeById,
  updateEmployeeById = _require.updateEmployeeById;
var router = express.Router();

/* GET users listing. */
router.get('/employee', getEmployees);
router.get('/employee/:id', getEmployeeById);
router.post('/employee', createEmployee);
router.put('/employee/:id', updateEmployeeById);
module.exports = router;