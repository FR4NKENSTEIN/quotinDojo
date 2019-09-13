const Qoute = require("./models");

module.exports = {
    index: function(request,response){
        console.log("########  @ INDEX  ########");
        response.render('index');
    },
    success: function(req,res){
        console.log("########  @ LIST  ########");
        Qoute.find()
            .then(docs => res.render('list', {quotes: docs}))
    },
    creator: function(req,res){
        console.log('########  DATA: ', req.body);
        const entry = new Qoute();
        entry.who = req.body.for_who;
        entry.what = req.body.for_what;
        entry.save().then(newQuote => {
            console.log('######## NEW QUOTE: ', newQuote);
            res.redirect('/quotes');
        }).catch(err => {
            console.log('######## ERRORS: ', err);
            for(var key in err.errors){
                req.flash('bad', err.errors[key].message);
            }
            res.redirect('/');
        });
    },
};