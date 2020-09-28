const express = require('express');
const connectDB = require('./configs/db');

const app = express();
const port = process.env.PORT || 8080;

connectDB();

app.use(express.json());

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
