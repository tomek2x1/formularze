const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProducerSchema = new Schema(
  {
    id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, default: 0 },
  },
);

module.exports = Match = mongoose.model("Producer", ProducerSchema);