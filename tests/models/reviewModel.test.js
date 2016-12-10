let db = require('../../db/index');
let Review = require('../../db/models/review');
let chai = require('chai');
let Promise = require('bluebird');

chai.use(require('chai-as-promised'));
chai.should();


describe(" Review model", () => {
  const nullNameReview = {
    comment: "Great product"
  };

  const nullCommentReview= {
    rating: 4
  };

  describe("Check Review validation", () => {
    it("Reject null Review name", () => {
      return Review.create(nullNameReview).should.be.rejected;
    })

    it("Reject null Review price", () => {
      return Review.create(nullCommentReview).should.be.rejected;
    })

  })
})

