const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

const hbs = require('express-handlebars');
app.engine('handlebars', hbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', require('./routes'));

app.listen(port);
