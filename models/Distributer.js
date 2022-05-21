const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var addressSchema = new Schema({
    address_line_1:{
          type : String,
          required : true
    },
    address_line_2:{
        type : String,
        required : false
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    postal_code :{
        type: 'Number',
        required: true
    }

},{
    timestamps: true
});

var distributorSchema = new Schema({
    name :{
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true
    },
    address: [addressSchema]
},{
    timestamps: true
});

var distributors = mongoose.model('distributor', distributorSchema);
module.exports = distributors; 