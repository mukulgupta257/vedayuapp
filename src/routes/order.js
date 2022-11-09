const { Router } = require("express");
const express = require("express");
const {
  createOrder,
  getOrder,
  getProductDetail,
  uploadProductImage,
  updateProduct,
  deleteProduct,
  updateOrder,
  initRazorPay,
  verifyRazorPay,
  validateOrder,
} = require("../controllers/order");
const { paramsValidator } = require("../middleware/paramsValidator");
const { uploadFile } = require("../middleware/upload");
const { verifyRole } = require("../middleware/verifyRole");
const { verifyUser } = require("../middleware/verifyUser");
const { getProducts, updateProducts } = require("./validation");
const router = Router();

router.route("/validate").post(verifyUser, validateOrder);
router.route("/create").post(verifyUser, createOrder);
router.route("/").post(verifyUser, getOrder);
router.route("/:id").put(verifyUser, updateOrder);
router.route("/:id").delete(verifyRole, deleteProduct);
router.route("/razorpay").post(initRazorPay);
// router.route('/verification').post(verifySignature);
// router.route('/:id').get(getProductDetail);
router.route("/getorders",)
router
  .route("/upload")
  .post(verifyRole, uploadFile.single("file"), uploadProductImage);
module.exports = router;
