const router = require('express-promise-router')();
const routerController = require('../controllers/userController');

router.get('/user', routerController.listUsers);
router.post('/user', routerController.newUser);

module.exports = router;