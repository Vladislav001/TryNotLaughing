const mongoose = require('mongoose');

var recallSchema = mongoose.Schema({
    rating: {
        type: Number,
        required: false
    },
    comment: {
        type: String,
        required: false
    }
});

recallSchema.virtual('recallId').get(function(){
    return this._id;
});

var Recall = mongoose.model('Recall', recallSchema);

module.exports = Recall;
