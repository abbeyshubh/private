const mongoose = require('mongoose');
mongoose
.connect("mongodb://localhost:27017/categoriesDB",
{useNewUrlParser:true})
.then(res => console.log("Connected"))
.catch(err => console.log("Could not connect with DB"));

require("../modals/details.modal");