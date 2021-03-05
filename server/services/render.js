const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/bungas
    axios.get('http://localhost:3000/api/bungas')
        .then(function(response){
            res.render('index', { bungas : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_bunga = (req, res) =>{
    res.render('add_bunga');
}

exports.update_bunga = (req, res) =>{
    axios.get('http://localhost:3000/api/bungas', { params : { id : req.query.id }})
        .then(function(bungadata){
            res.render("update_bunga", { bunga : bungadata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}