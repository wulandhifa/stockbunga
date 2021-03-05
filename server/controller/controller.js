var Bungadb = require('../model/model');

// create and save new bunga
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new bunga
    const bunga = new Bungadb({
        jenis:req.body.jenis,
        warna:req.body.warna,
        tanggal:req.body.tanggal,
        stock:req.body.stock,
        status : req.body.status
    })

    // save bunga in the database
    bunga
        .save(bunga)
        .then(data => {
            //res.send(data)
            res.redirect('/add-bunga');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all bunga
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Bungadb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found bunga with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving bunga with id " + id})
            })

    }else{
        Bungadb.find()
            .then(bunga => {
                res.send(bunga)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving bunga information" })
            })
    }

    
}

// Update a new idetified bunga by bunga id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Bungadb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update bunga with ${id}. Maybe bunga not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update bunga information"})
        })
}

// Delete a bunga with specified bunga id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Bungadb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}