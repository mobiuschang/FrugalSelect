'user strict';

const Alternative = require("./alternative");
const Category = require("./category");
const Product = require("./product");
const Review = require("./review");
const User = require("./user");

Product.belongsToMany(Category, {through: "productCategories"});

Review.belongsTo(Product);
Product.hasMany(Review);

Review.belongsTo(User);
User.hasMany(Review);

module.exports = {Alternative, Category, Product, Review, User}