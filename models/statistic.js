const mongoose = require('mongoose');

var statisticSchema = mongoose.Schema({
  type_game: {
    type: String,
    required: true
  },
  // link_video: {
  //   type: String,
  //   required: false
  // },
  // count_laughed_player_1: {
  //   type: Number,
  //   required: false
  // },
  // count_laughed_player_2: {
  //   type: Number,
  //   required: false
  // },
});

statisticSchema.virtual('statisticId').get(function(){
  return this._id;
});

var Statistic = mongoose.model('Statistic', statisticSchema);

module.exports = Statistic;
