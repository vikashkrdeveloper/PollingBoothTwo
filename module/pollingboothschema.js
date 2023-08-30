const database = require("../db/connection");
const pollingboothdata = new database.Schema(
  {
    pnum: {
      type: Number,
      trim: true,
    },
    pbname: {
      type: String,
      lowercase: true,
      trim: true,
    },
    pcun: {
      type: String,
      lowercase: true,
      trim: true,
    },
    win14: {
      type: String,
      lowercase: true,
      trim: true,
    },
    firstroundwin: {
      type: String,
      lowercase: true,
      trim: true,
    },
    marginper: {
      type: Number,
      trim: true,
    },
    margin: {
      type: Number,
      trim: true,
    },
    totalvoters: {
      type: Number,
      trim: true,
    },
    bjpper: {
      type: Number,
      trim: true,
    },
    bjpvote: {
      type: Number,
      trim: true,
    },
    incvote: {
      type: Number,
      trim: true,
    },
    incvoteper: {
      type: Number,
      trim: true,
    },
  },
  { timestamps: true }
);

const pollingboothmodule = database.model("pollingboothdata", pollingboothdata);
module.exports = pollingboothmodule;
