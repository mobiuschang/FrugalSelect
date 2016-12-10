let db = require('../../db/index');
let Alternative = require('../../db/models/alternative');
let chai = require('chai');
let Promise = require('bluebird');

chai.use(require('chai-as-promised'));
chai.should();


describe("Alternative model", () => {
  const nullNameProduct = {
    price: "10",
    description: "Very cheap watch",
    url: "http://invicta.com/watch.html"
  };

  const nullPriceProduct = {
    name: "Invicta watch",
    description: "Very cheap watch",
    url: "http://invicta.com/watch.html"
  };

  const invalidUrl = {
    name: "Invicta watch",
    price: "10",
    description: "Very cheap watch",
    url: "random test"
  };

  describe("Check alternative product validation", () => {
    it("Reject null product name", () => {
      return Alternative.create(nullNameProduct).should.be.rejected;
    })

    it("Reject null product price", () => {
      return Alternative.create(nullPriceProduct).should.be.rejected;
    })

    it("Reject null product name", () => {
      return Alternative.create(invalidUrl).should.be.rejected;
    })
  })
})

