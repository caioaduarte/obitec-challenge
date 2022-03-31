const router = require('express-promise-router')();
const routerController = require('../controllers/userController');

router.get('/user', routerController.listUsers);
router.post('/user', routerController.newUser);
router.put('/user/:id', routerController.updateUser);
router.delete('/user/:id', routerController.deleteUser);

module.exports = router;