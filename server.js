//CONFIGURATION
    // IMPORTS
const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const app = express();

    // SETTINGS
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: "secretQuote",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));
app.use(flash());

// "ROUTES"
require("./server/routes")(app);

// PORT
app.listen(8000, (err)=>{
    console.log("listening on port 8000");
});