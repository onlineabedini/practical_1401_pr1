// http://localhost:8080/api/ticket/ . . . 

const controller = require('../controllers/ticket.js');
const middleware = require('../middlewares/ticket.js');
const router = require('express').Router();

// total routes middleware
router.use(middleware.total_middleware)

router.get('/get_all', middleware.get_all_middleware, (req, res) => controller.get_all(req, res));
router.get('/get_id/:id', middleware.get_id_middleware, (req, res) => controller.get_by_id(req, res));
router.get('/get_by/:group', middleware.get_group_middleware, (req, res) => controller.get_by_group(req, res));
// also we can:
// router.post('/get_by', (req, res) => controller.get_by_group(req, res));
router.post('/make', middleware.make_middleware, (req, res) => controller.make_one(req, res));
router.put('/update/:id', middleware.update_middleware, (req, res) => controller.update_by_id(req, res));
router.delete('/delete/:id', middleware.delete_middleware, (req, res) => controller.delete_by_id(req, res));

module.exports = router;