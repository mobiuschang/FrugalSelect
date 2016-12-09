const Sequelize = require('sequelize');
const chalk = require('chalk');

const name = 'frugalselect';
const url = `postgres://localhost:5432/${name}`;

console.log(chalk.yellow(`Opening database connection to ${url}`));

const db = module.exports = new Sequelize(url, {
  logging: false,
  native: true,
  define: {
    freezeTableName: true,
    timestamps: true
  }
});

require('./models');

function sync(force = true) {
  return db.sync({force})
    .then(ok => console.log(`Synced models to db ${url}`))
    .catch(fail => {
      console.log(`Creating database ${name}...`);
      return new Promise((resolve, reject) =>
        require('child_process').exec(`createdb "${name}"`, resolve)
      ).then(() => sync(true))
    })
}

db.didSync = sync();