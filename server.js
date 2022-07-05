const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const colors = require('colors');
const connectmongoDB = require('./Config/mongoDB');
const expressejslayout = require('express-ejs-layouts');
dotenv.config();
app = express();



// body request
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

let PORT = process.env.SERVER_PORT || 9001

// connect mongodb server
connectmongoDB();
// ejs setup
app.set("view engine","ejs");
app.set("layout","./layout/app");
app.use(expressejslayout);

// static folder for public
app.use('/assets', express.static(path.join(__dirname, '/assets')));



// router for static file

// app.get('/', (req, res) => {
//  res.sendFile('/public/index.html', {root : __dirname});
// });
// app.get('/contact', (req, res) => {
//  res.sendFile('/public/contact.html', {root : __dirname});
// });
// app.get('/team', (req, res) => {
//  res.sendFile('/public/team.html', {root : __dirname});
// });

app.use('/students', require('./Router/StudentsRoutes'));





















































// listen port
app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`.bgWhite.black))
