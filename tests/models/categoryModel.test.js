let db = require('../../db/index');
let Category = require('../../db/models/category');
let chai = require('chai');
let Promise = require('bluebird');

chai.use(require('chai-as-promised'));
chai.should();


describe("Category model", () => {
  const nullCategory = {
  };

  const emptyNameCategory = {
    name: ""
  }
  describe("Check category validation", () => {
    it("Reject null category", () => {
      return Category.create(nullCategory).should.be.rejected;
    })

    it("Reject empty category name", () => {
      return Category.create(emptyNameCategory).should.be.rejected;
    })

  })
})

