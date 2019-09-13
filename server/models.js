const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dojoQuotes_asgmt", {useNewUrlParser: true});

const QuoteSchema = new mongoose.Schema({
    who: {type: String, minlength: 2, required: true},
    what: {type: String, minlength: 10, maxlength: 100, required: true},
}, {timestamps:true});
const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;