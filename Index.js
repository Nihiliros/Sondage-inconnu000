const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Sequelize = require('sequelize');
const MySql = require('mysql2');

const db = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = db.define('user', {
    fullname: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING }
});

User
    .sync()
    .then(() => {
    User.create({
    fullname: 'Administrateur',
    email: 'admin@gmail.com',
    password: 'P@ssw0rd'
})
});
​
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
​
app.get('/', (req, res) => {
    res.render('homepage');
});
​
app.get('/signup', (req, res) => {
    res.render('signup');
});
​
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
});
​
app.listen(3000);