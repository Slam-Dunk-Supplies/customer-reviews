const express = require('express');
const app = express();

const PORT = 3000;
const path = require('path');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.listen(PORT, () => {
    console.log('app is running on localhost:3000');
})