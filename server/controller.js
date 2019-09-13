

module.exports = {
    index: function(request,response){
        response.render('index');
    },
    success: function(req,res){
        res.render('list');
        // I'll have to rewrite this function later on
        // once I actually have data to display
    },
};