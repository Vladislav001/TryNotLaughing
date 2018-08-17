var mongoose = require('mongoose');

var videoSchema = mongoose.Schema({
    link: {
        type: String,
        required: true
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
