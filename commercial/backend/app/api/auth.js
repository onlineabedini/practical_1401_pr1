// http://localhost:8080/api/auth/ . . . 

const controller = require('../controllers/auth.js');
const middleware = require('../middlewares/auth.js');
const router = require('express').Router();

// total routes middleware
router.use(middleware.total_middleware)

router.post('/login', middleware.login_middleware, (req, res) => controller.login(req, res));
router.post('/register', middleware.register_middleware, (req, res) => controller.register(req, res));

module.exports = router;