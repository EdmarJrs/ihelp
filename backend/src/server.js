const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");
require('dotenv/config');

const app = express();

mongoose.connect(
  'mongodb+srv://leogonzaga:bloodhelp@omnistack-ekd7k.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);
app.use(session({
  secret: 'ihelp',
  resave: true,
  saveUninitialized: false
}));

app.listen(3000, function() {
  console.log("Servidor online!");
});
