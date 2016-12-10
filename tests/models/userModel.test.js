let db = require('../../db/index');
let User = require('../../db/models/user');
let chai = require('chai');
let Promise = require('bluebird');

chai.use(require('chai-as-promised'));
chai.should();


describe(" User model", () => {
  const validUser =  {name: "James Bonds", email: "jamesbond@gmail.com", password: "haha123"};

  const nullNameUser = {
    email: "thomasJefferson@gamil.com",
    password: 'haha1234'
  };

  const nullEmailUser= {
    name: "Thomas Jefferson",
    password: 'haha123'
  };

  const invalidEmailUser = {
    name: "Thomas Jefferson",
    email: 'haha',
    password: 'haha123'
  };

  describe("Check User validation", () => {

    it("Reject null User name", () => {
      return User.create(nullNameUser).should.be.rejected;
    })

    it("Reject null User price", () => {
      return User.create(nullEmailUser).should.be.rejected;
    })

    it("Reject null User name", () => {
      return User.create(invalidEmailUser).should.be.rejected;
    })
  })
})

