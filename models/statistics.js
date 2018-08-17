const mongoose = require('mongoose');

var statisticsSchema = mongoose.Schema({
    link_video: {
        type: String,
        required: true
    },
    count_laughed_player_1: {
        type: Number,
        required: true
    },
    count_laughed_player_2: {
        type: Number,
        required: true
    },
});

statisticsSchema.virtual('statisticsId').get(function(){
    return this._id;
});

var Statistics = mongoose.model('Statistics', statisticsSchema);

module.exports = Statistics;
