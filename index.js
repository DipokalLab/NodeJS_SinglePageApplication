const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const fs = require('fs');
const bodyParser = require('body-parser');

const main = require('./run/main');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('pub'));

app.set('view engine','ejs');
app.set('views','./views');

app.get('/', main.load_index);
app.post('/init', main.load_init);
app.get('/page/:id', main.load_page);


server.listen(5004);