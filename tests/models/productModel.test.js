let db = require('../../db/index');
let Product = require('../../db/models/product');
let chai = require('chai');
let Promise = require('bluebird');

chai.use(require('chai-as-promised'));
chai.should();


describe(" Product model", () => {
  const nullNameProduct = {
    price: "100000",
    description: "Very expensive watch",
    url: "http://burbery.com/watch.html"
  };

  const nullPriceProduct = {
    name: "Burbery watch",
    description: "Very expensive watch",
    url: "http://burbery.com/watch.html"
  };

  const invalidUrl = {
    name: "Burbery watch",
    price: "100000",
    description: "Very expensive watch",
    url: "random test"
  };

  describe("Check product validation", () => {
    it("Reject null product name", () => {
      return Product.create(nullNameProduct).should.be.rejected;
    })

    it("Reject null product price", () => {
      return Product.create(nullPriceProduct).should.be.rejected;
    })

    it("Reject null product name", () => {
      return Product.create(invalidUrl).should.be.rejected;
    })
  })
})

