import db from "../models";
const Employee = db.employee;

export const getEmployees = async (req, res) => {
    const result = await Employee.findAll();
    return res.status(200).json(result)
}

export const getEmployeeById = async (req, res) => {
    const { id } = req.params;

    const result = await Employee.findByPk(id);
    return res.status(200).json(result)
}

export const createEmployee = async (req, res) => {

    const employeeData = req.body;
    const result = await Employee.create(employeeData);

    return res.status(200).json(result)
}

export const updateEmployeeById = async (req, res) => {
    const { id } = req.params;
    const payload = req.body

    const employee = await Employee.findByPk(id);
    const result = await employee.update(payload)


    return res.status(200).json(result)
}