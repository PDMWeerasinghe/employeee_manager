var express = require('express');
const { getEmployees, createEmployee, getEmployeeById, updateEmployeeById } = require('../controller/Employee');
var router = express.Router();

/* GET users listing. */
router.get('/employee', getEmployees);

router.get('/employee/:id', getEmployeeById);

router.post('/employee', createEmployee);

router.put('/employee/:id', updateEmployeeById);

module.exports = router;
