import express from 'express';
import bodyParser from 'body-parser';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';
import * as underscore from 'underscore-db';

const adapter = new FileSync('./data/data.json');
const db = lowdb(adapter);

db._.mixin(underscore);

var app = express();
app.use(bodyParser.json());

app.use(express('public'));
app.use('/node_modules', express('node_modules'));

import './utils/authorize-user.js';

//User routes
var usersController = require('./controllers/users-controller')(db);
app.get('/api/users', usersController.get);
app.post('/api/users', usersController.post);
app.put('/api/auth', usersController.put);

// Fortune cookies
var cookiesController = require('./controllers/cookies-controller')(db);
app.get('/api/cookies', cookiesController.get);
app.post('/api/cookies', cookiesController.post);
app.put('/api/cookies/:id', cookiesController.put);

// My fortune cookies
var myCookiesController = require('./controllers/my-cookies-controller')(db);
app.get('/api/my-cookie', myCookiesController.get);

// Categories
var categoriesController = require('./controllers/categories-controller')(db);
app.get('/api/categories', categoriesController.get);

var port = 3000;
app.listen(port, function () {
  console.log('Server is running at http://localhost:' + port);
});
