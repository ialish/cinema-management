const express = require('express');
const connectDB = require('./config/db');
const indexRouter = require('./routes/index');

const app = express();
const port = process.env.PORT || 8000;

connectDB();

app.use(express.json());
app.use('/', indexRouter);

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
