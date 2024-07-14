const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const peopleRouter = require('./routes/people');

app.use(express.static("./public"));
app.use(express.static('./methods-public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const logger = (req, res, next) => {
    const currentTime = new Date().toISOString();
    console.log(`[${currentTime}] ${req.method} ${req.url}`);
    next();
};

app.use(logger);

app.use("/api/v1/people", peopleRouter);

app.all('*', (req, res) => {
    res.status(404).send('Page not found');
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});