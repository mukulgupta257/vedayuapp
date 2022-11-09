const { Router } = require('express');
const { makeActive, deleteCategory } = require('../controllers/categoryList');
const { createCategory, getCategoryList } = require('../controllers/categoryList');
const { paramsValidator } = require('../middleware/paramsValidator');
const { verifyRole } = require('../middleware/verifyRole');
const { editBannerSchema } = require('./validation');
const router = Router();

router.route('/create').post(verifyRole, createCategory);
router.route('/').get(getCategoryList);
router.route('/:id').delete(verifyRole, deleteCategory);
router.route('/update/:id').put(verifyRole, paramsValidator(editBannerSchema, null, true) , makeActive);

module.exports = router;
