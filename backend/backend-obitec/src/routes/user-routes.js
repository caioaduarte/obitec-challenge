const router = require('express-promise-router')();
const routerControl = require('../controllers/userController');

router.get('/user', routerControl.listUsers);
router.post('/user', routerControl.newUser);
router.put('/user/:id', routerControl.updateUser);
router.delete('/user/:id', routerControl.deleteUser);

module.exports = router;