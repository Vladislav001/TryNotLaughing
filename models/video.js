const mongoose = require('mongoose');

var videoSchema = mongoose.Schema({
    link_720: {
        type: String,
        required: false
    },
    link_240: {
        type: String,
        required: false
    },
    category: {
      type: String,
      required: true
    },
    time: {
        type: Number,
        required: true
    },
});

videoSchema.virtual('videoId').get(function(){
    return this._id;
});

var Video = mongoose.model('Video', videoSchema);

module.exports = Video;
