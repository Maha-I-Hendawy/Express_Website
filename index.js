const express = require("express");

const app = express();

const path = require("path");


var mysql = require('mysql');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));


app.use(express.json());
app.use(express.urlencoded({extended: false}));





// this is the home page

app.get('/', (req, res) => {


	res.render('home');
    

});


// this is the about page 

app.get('/about', (req, res) => {

	

	res.render('about');

	
});


// this is the services page 

app.get('/services', (req, res) => {

	res.render('services');
})

// this is the products page

app.get('/products', (req, res) => {

	res.render('products');
})

// this is the contact us page

app.get('/contact', (req, res) => {

	res.render('contactus')

});

app.post('/contact', (req, res) => {

	sender = req.body.sender;
	email = req.body.email;
	msg = req.body.msg;


	console.log(sender);
	console.log(email);
	console.log(msg);


	
  

	res.redirect('/');

})







app.listen(3000, () => {

	console.log("Server is running on port 3000");
});