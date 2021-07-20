
const mongoose = require('mongoose');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const citiesSchema = new Schema(
    {
        id:{
            type: Number
        },
        name:{
            type: String
        },
        state:{
            type: String
        },
        country:{
            type: String
        },
        coord:{
            type: Object
        }
    },
);

module.exports =
    mongoose.models.cities || mongoose.model('cities', citiesSchema);