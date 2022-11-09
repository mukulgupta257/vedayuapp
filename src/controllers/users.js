const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const { sendSuccessResponse, sendError } = require("../utils/response");
const { messages } = require("../config/messages");
const user = require("../models/user");
const { allInOne } = require("../utils/queryHelper");
const { sendEmail } = require("../services/email");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password)
      return sendError(messages.id_required, req, res, 400);
    const isExist = await allInOne(user, "findOne", { email: email });
    if (isExist) return sendError(messages.email_exist, req, res, 400);
    bcrypt.genSalt(12, async function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        let userData = await allInOne(user, "create", {
          name,
          email,
          password: hash,
        });
        if (!userData) return sendError(messages.s_wrong, req, res, 400);
        const token = jwt.sign({ id: userData._id }, process.env.SECRET, {
          expiresIn: "3d",
        });
        userData = Object(userData);
        userData.password = undefined;
        sendEmail(userData, null, "Successfully Registered");
        return sendSuccessResponse(req, res, { user: userData, token });
      });
    });
  } catch (err) {
    sendError(err.message, req, res, 400);
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return sendError(messages.id_required, req, res, 400);
    let isExist = await user.findOne({ email: email }).populate("cart.item");
    if (!isExist) return sendError(messages.u_not_exist, req, res, 400);
    bcrypt.compare(password, isExist.password, async function (err, result) {
      if (err) return sendError(err, req, res, 400);
      if (!result) return sendError(messages.incorrect_pass, req, res, 400);
      const token = jwt.sign({ id: isExist._id }, process.env.SECRET, {
        expiresIn: "3d",
      });
      isExist = Object(isExist);
      isExist.password = undefined;
      return sendSuccessResponse(req, res, { user: isExist, token });
    });
  } catch (err) {
    sendError(err.message, req, res, 400);
  }
};

exports.addToCart = async (req, res) => {
  const { cartItems } = req.body;
  const userData = req.user;
  try {
    // if(!cartItems || !cartItems.length) return sendError(messages.not_enough, req, res, 400)
    let updateCart = await user.updateOne(
      { _id: userData._id },
      { cart: cartItems },
      { new: true }
    );
    if (!updateCart) return sendError(messages.u_not_exist, req, res, 400);
    const updatedUser = await user
      .findOne({ _id: userData._id })
      .populate("cart.item");
    return sendSuccessResponse(req, res, updatedUser);
  } catch (err) {
    sendError(err.message, req, res, 400);
  }
};

exports.addShippingAddress = async (req, res) => {
  const { addresses } = req.body;
  const userData = req.user;
  try {
    if (!addresses || !addresses.length)
      return sendError(messages.not_enough, req, res, 400);
    let updateAddress = await user.updateOne(
      { _id: userData._id },
      { shippingAddress: addresses },
      { new: true }
    );
    if (!updateAddress) return sendError(messages.u_not_exist, req, res, 400);
    const updatedUser = await user.findOne({ _id: userData._id });
    return sendSuccessResponse(req, res, updatedUser);
  } catch (err) {
    sendError(err.message, req, res, 400);
  }
};
exports.resetPassword = async (req, res) => {
  const userData = req.user;
  const { password } = req.body;
  try {
    bcrypt.genSalt(12, async function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        let updateUser = await user.updateOne(
          { email: userData.email },
          { password: hash },
          { new: true }
        );
        if (!updateUser) return sendError(messages.u_not_exist, req, res, 400);
        return sendSuccessResponse(req, res, { message: "password changed" });
      });
    });
  } catch (err) {
    sendError(err.message, req, res, 400);
  }
};
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const singleUser = await user.findOne({ email: email });
    if (!singleUser) return sendError(messages.u_not_exist, req, res, 400);
    const token = jwt.sign({ id: singleUser._id }, process.env.SECRET, {
      expiresIn: "3d",
    });
    sendEmail({ singleUser, token }, null, "Forgot Password");
    return sendSuccessResponse(req, res, { message: "link sent" });
  } catch (err) {
    sendError(err.message, req, res, 400);
  }
};
