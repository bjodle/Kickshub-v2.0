require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const Routes = require("./routes/routes"); //importing the routes so our app actually uses them

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json()); //takes any json data from requests, and parses it into a js code

// view engine
app.set('view engine', 'ejs');

const dbURI = process.env.host
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => app.listen(80))
  .then(console.log("SERVER ONLINE"))
  .catch((err) => console.log(err));

// routes
app.use(Routes);


const cult = 
`
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀  ⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣦⡄⢠⣴⣿⣧⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠟⢛⡛⠻⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀  ⠖⢢⣿⣿⣦⣬⣧⣶⣿⣿⡴⠲⠀⠀⠀⠀
⠀⠀⠀⠀ ⢸⣭⣽⠛⠻⠉⠀⢹⠟⠛⠻⣯⡭⡇⠀⠀⠀⠀
⠀⠀⠀ ⡡⠚⢉⣁⣠⡄⠀⠀⠀⠀⣤⣀⣉⠉⠓⢄⠀⠀⠀
⠀⠀ ⢠⠁⣴⠋⠀⠘⢧⡴⠷⣤⡴⠃⠀⠈⠳⠀⠈⡆⠀⠀
⠀⠀⠀⣠⢆⣿⣾⣿⣿⠻⣄⠀⢀⣴⣿⣿⡟⢶⣄⠰⣅
 ⣥⠚⡿⡞⣾⣿⣭⣭⠅⣧⠀⢸⣿⣯⣭⡅⢨⢽⡄⢻⠓⢬
⠀⠳⣄⣧⢳⣘⠻⠿⠿⠔⠑⠶⠀⠻⠿⠿⠵⠋⡸⠃⣸⣠⠞⠀
⠀⠀ ⠈⠢⢍⣓⠒⠒⠒⠒⠒⠒⠂⠐⠒⠒⣋⡠⠔⠁⠀⠀
⠀⠀⠀⠀  ⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⠀⠀`
console.log(cult)