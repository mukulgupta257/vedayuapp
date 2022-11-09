const { Router } = require('express');
const { registerUser, loginUser, addToCart, addShippingAddress, resetPassword, forgotPassword } = require('../controllers/users');
const { paramsValidator } = require('../middleware/paramsValidator');
const { verifyUser } = require('../middleware/verifyUser');
const { createUser, loginUsers, cartUser, addressSchema, resetUser } = require('./validation');
const router = Router();

router.route('/create').post(paramsValidator(createUser), registerUser);
router.route('/login').post(paramsValidator(loginUsers), loginUser);
router.route('/reset').post(verifyUser, paramsValidator(resetUser), resetPassword);
router.route('/add-to-cart').post(verifyUser, paramsValidator(cartUser), addToCart);
router.route('/add-address').post(verifyUser, paramsValidator(addressSchema), addShippingAddress);
router.route('/forgot').post(forgotPassword);

module.exports = router;
