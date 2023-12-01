const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let talentSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama harus diisi'],
    },
  },
  { timestamps: true }
);

module.exports = model('Talent', talentSchema);