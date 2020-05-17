
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname + '/')));

app.get('*', (req, res) => {
    res.status(200).render('index.html');

});

const port = process.env.PORT || 9000;

app.listen(port, () => {
	console.log(`App is listening on port ${port}`);
});