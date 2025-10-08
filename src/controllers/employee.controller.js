const Employee = require('../models/Employee');

// Get all employees
exports.list = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// Create new employee
exports.create = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({
      message: 'Employee created successfully.',
      employee_id: employee._id
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// Get employee by ID
exports.getById = async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.eid);
    if (!emp) {
      return res.status(404).json({ status: false, message: 'Employee not found' });
    }
    res.status(200).json(emp);
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// Update employee by ID
exports.update = async (req, res) => {
  try {
    const emp = await Employee.findByIdAndUpdate(req.params.eid, req.body, { new: true });
    if (!emp) {
      return res.status(404).json({ status: false, message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee details updated successfully.' });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// Delete employee by ID 
exports.remove = async (req, res) => {
  try {
    const { eid } = req.query;
    const emp = await Employee.findByIdAndDelete(eid);
    if (!emp) {
      return res.status(404).json({ status: false, message: 'Employee not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};
