const router = require('express').Router();
const { list, create, getById, update, remove } = require('../controllers/employee.controller');

// temporary test endpoints 
router.get('/employees', list);
router.post('/employees', create);
router.get('/employees/:eid', getById);
router.put('/employees/:eid', update);
router.delete('/employees', remove);

module.exports = router;
