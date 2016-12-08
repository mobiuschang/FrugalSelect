const Promise = require('bluebird');
const db = require("./models");
const Product = require('./models/product');
const Alternative = require('./models/alternative');
const Category = require('./models/category');
const Review = require('./models/review');
const User = require('./models/user');

var data = {
  product: [
    {name: "Rolex Oyster Perpetual Submariner", price: 7975, description: "In basic steel with a black dial and bezel, it’s iconic, as well as truly classic. The Submariner was introduced back in 1953 and keeps its aesthetic largely unchanged despite the increase in case diameter over the decades, now at 40mm. ", url: "http://cdn2.jomashop.com/media/catalog/product/r/o/rolex-oyster-perpetual-submariner-black-dial-black-cerachrom-bezel-steel-mens-watch-116610ln_2.jpg"}
  ],
  alternative: [
    {name: "Invicta 89260B Pro Diver Automatic", price: 85, description: "There are a lot of Rolex knockoffs out there, but Invicta only copies it in spirit. The 660 ft water resistant diver is full stainless steel, a more than manageable 44mm diameter and fully automatic with no need for a battery, ever. Even the screw down crown exists to keep water out, and the mineral crystal face means you can punish this beauty without worrying about scratching. ", url: "https://images-na.ssl-images-amazon.com/images/I/91q-Wj4myCL._UY879_.jpg"}
  ],
  category: [
    {name: "watch"}
  ],
  review: [
    {rating: "4", comment: "Really good alternative"}
  ],
  user:[
    {name: "James Bonds", email: "jamesbond@gmail.com", password: "haha123"}
  ]
};

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      console.log('db model', db.model(name))
      return db.model(name)
      .create(item);
    });
  });
})
.then(function () {
  console.log("Finished inserting data");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function () {
  db.close() // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
  console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
  return null; // silences bluebird warning about using non-returned promises inside of handlers.
});


// Product.sync({force:true}).then(function() {
//   return Product.create(data['product'][0])
// })
