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

var foodDetailSchema = new Schema({
    donor_name:{
        name: String,
        required: true
    },
    food_name : {
        name: String,
        required: true
    },
    quantity:{
        name: Number,
        required: true
    },
    address: [addressSchema]
},{
    timestamps: true
});

var foodDetails = mongoose.model('foodDetail', foodDetailSchema);
module.exports = foodDetails; 