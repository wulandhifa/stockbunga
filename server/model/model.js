const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    jenis : {
        type : String,
        required: true,
        unique: true
    },
    warna : {
        type: String,
        required: true
    },
    tanggal:  {
        type: Date,
        required: true
    },
    stock:Number,
    status : String
})

const Bungadb = mongoose.model('bungadb', schema);

module.exports = Bungadb;