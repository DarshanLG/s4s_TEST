const express = require("express");
const cors = require("cors");
const faker = require("faker");

var app = express();

var user = {
    name : faker.name.firstName(),
    email : faker.internet.email(),
    phone : faker.phone.phoneNumber(),
    country : faker.address.country()
};

app.use(cors());

app.get("/", function(req, res){
    res.send(user);
});

app.listen(4000, function(){
    console.log("Server up and running on PORT 4000")
});
