const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const detailSchema = new Schema({
  name: {
    type: String
  },
  products: {
    type: String
  },
  prodInSc: {
    type: Number
  },
  visible: {
    type: Boolean
  }
  // actions : {

  // }
});

module.exports = mongoose.model("details", detailSchema);
