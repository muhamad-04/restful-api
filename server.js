const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/restful-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

app.use(bodyParser.json());


app.use('/courses', courseRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
