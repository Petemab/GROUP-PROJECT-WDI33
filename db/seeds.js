const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

const Crawl = require('../models/crawl');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Crawl.create([{

    name: 'GA crawl',
    //yyyy-mm-dd
    date: '1994-11-11',
    line: 'central',
    start: 'mile end',
    end: 'oxford st',
    pubs: []
  },{
    name: 'central crawl',
    date: '1994-11-11',
    line: 'central',
    start: 'mile end',
    end: 'oxford st',
    pubs: []
  },{
    name: 'westside crawl',
    date: '1994-11-11',
    line: 'central',
    start: 'mile end',
    end: 'oxford st',
    pubs: []
  }])
    .then(crawls => console.log(`${crawls.length} crawls created`));

  User.create([{

    username: 'James',
    email: 'James@ga.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  },{
    username: 'Dan',
    email: 'Dan@ga.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  },{
    username: 'Stacey',
    email: 'Stacey@ga.co',
    password: 'pass',
    passwordConfirmation: 'pass'
  }])

    .then(users => console.log(`${users.length} users were created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());

});
