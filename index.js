const express = require("express");

const app = express();

const path = require("path");



app.use(express.json());
app.use(express.urlencoded({extended: false}));

// this is the home page

app.get('/', (req, res) => {

	res.sendFile(path.join(__dirname, '/templates/home.html')); 

});


// this is the about page 

app.get('/about', (req, res) => {

	res.sendFile(path.join(__dirname, '/templates/about.html'));
});


// this is the services page 

app.get('/services', (req, res) => {

	res.sendFile(path.join(__dirname, '/templates/services.html'))
})

// this is the products page

app.get('/products', (req, res) => {

	res.sendFile(path.join(__dirname, '/templates/products.html'))
})

// this is the contact us page

app.get('/contact', (req, res) => {

	res.sendFile(path.join(__dirname, '/templates/contactus.html'));
});

app.post('/contact', (req, res) => {

	name = req.body.name;
	email = req.body.email;
	msg = req.body.message;

	console.log(name);
	console.log(email);
	console.log(msg);

	res.redirect('/');
})





app.listen(3000, () => {

	console.log("Server is running on port 3000");
});