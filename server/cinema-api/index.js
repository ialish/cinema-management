const express = require('express');
const session = require('express-session');
const connectDB = require('./configs/db');

const app = express();
const port = process.env.PORT || 8080;

connectDB();

app.use(session({
	secret: 'secret',
	maxAge: 5 * 60000,
  resave: true,
  saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
