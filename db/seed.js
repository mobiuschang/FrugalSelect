const Promise = require('bluebird');
const chalk = require('chalk');
const db = require("./index");

const productsList = [
{name: "Rolex Oyster Perpetual Submariner", price: 7975, description: "In basic steel with a black dial and bezel, it’s iconic, as well as truly classic. The Submariner was introduced back in 1953 and keeps its aesthetic largely unchanged despite the increase in case diameter over the decades, now at 40mm. ", url: "http://cdn2.jomashop.com/media/catalog/product/r/o/rolex-oyster-perpetual-submariner-black-dial-black-cerachrom-bezel-steel-mens-watch-116610ln_2.jpg"}
];

const alternativesList = [
  {name: "Invicta 89260B Pro Diver Automatic", price: 85, description: "There are a lot of Rolex knockoffs out there, but Invicta only copies it in spirit. The 660 ft water resistant diver is full stainless steel, a more than manageable 44mm diameter and fully automatic with no need for a battery, ever. Even the screw down crown exists to keep water out, and the mineral crystal face means you can punish this beauty without worrying about scratching. ", url: "https://images-na.ssl-images-amazon.com/images/I/91q-Wj4myCL._UY879_.jpg"}
]

const categoriesList = [
  {name: "watch"}
]

const reviewsList = [
  {rating: "4", comment: "Really good alternative"}
]

const usersList = [
  {name: "James Bonds", email: "jamesbond@gmail.com", password: "haha123"}
]

// Association table for the seed data
// Can be passed to seedModelFunc as param
const dataTable = {
  'products': productsList,
  'alternatives': alternativesList,
  'categories': categoriesList,
  'reviews': reviewsList,
  'users': usersList
}

// Helper function to seed data to the database
// Create the data associated with the passed in param model
let seedModelFunc = function(modelName) {
 return () => db.Promise.map(dataTable[modelName], dataList => db.model(modelName).create(dataList))
}

let seedProducts = seedModelFunc('products');
let seedAlternatives = seedModelFunc('alternatives');
let seedCategories = seedModelFunc('categories');
let seedReviews = seedModelFunc('reviews');
let seedUsers = seedModelFunc('users');

let createdProducts, createdCategories, createdReviews, createdAlternatives;

db.didSync
  .then(() => db.sync({force:true}))
  .then(seedProducts)
  .then(products => { createdProducts = products })
  .then(seedAlternatives)
  .then(alternatives => { createdAlternatives = alternatives })
  .then(seedCategories)
  .then(categories => { createdCategories = categories })
  .then(seedReviews)
  .then(reviews => {createdReviews = reviews })
  .then(seedUsers)
  .then(users => {createdUsers = users })
  .then(() => (
    createdProducts[0].addCategory(createdCategories[0]),
    createdProducts[0].setAlternative(createdAlternatives[0]),
    createdReviews[0].setProduct(createdProducts[0]),
    createdReviews[0].setUser(createdUsers[0])
  ))
  .then(() => console.log(chalk.yellow(`Seeded data OK`)))
  .catch(error => console.error(error))
  .finally(()=> db.close())

// Product.sync({force:true}).then(function() {
//   return Product.create(data['product'][0])
// })
