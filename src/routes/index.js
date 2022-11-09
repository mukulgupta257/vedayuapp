const ProductRouter = require("./product");
const userRouter = require("./user");
const categoryRouter = require("./category");
const bannerRouter = require("./banner");
const orderRouter = require("./order");
const couponRouter = require("./coupon");
const categoryListRouter = require("./categoryList");

const routesInit = (app) => {
  
  app.use("/product", ProductRouter);
  app.use("/user", userRouter);
  app.use("/category", categoryRouter);
  app.use("/banner", bannerRouter);
  app.use("/order", orderRouter);
  app.use("/coupon", couponRouter);
  app.use("/category-list", categoryListRouter);
  return app;
};

module.exports = routesInit;
