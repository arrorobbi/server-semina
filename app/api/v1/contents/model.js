const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let contentSchema = Schema(
  {
    title: {
      type: String,
      minlength: [5],
      maxLength: [200],
      required: [true],
    },
    news: {
        type: String,
        minlength: [100],
        required: [true]
    },
    location: {
        type: String,
        required: [true]
    },
    author: {
        type: String,
        minlength: [3],
        maxLength: [50],
        required: [true]
    },

//waiting image completed

    // image: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Images',
    //     required: true,
    // }

    category: {
      type: String,
      minlength: [5],
      required: [true]
  },
  },
  { timestamps: true }
);

module.exports = model('Content', contentSchema);