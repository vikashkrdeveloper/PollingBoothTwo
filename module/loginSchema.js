const database = require("../db/connection");
const jwt = require("jsonwebtoken");
const loginSchema = new database.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      trim: true
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true
    },
    username: {
      type: String,
      lowercase: true,
      trim: true,
      unique: true

    },
    phone: {
      type: Number,
      trim: true,
      unique: true

    },
    role: {
      type: Number,
      default: 0
    },
    password: {
      type: String,
      trim: true
    },
    tokens: [
      {
        token: {
          type: String,
          trim: true
        }
      }
    ]
  },
  { timestamps: true }
);

loginSchema.methods.generatetoken = async function () {
  try {
    const token = await jwt.sign(
      { _id: this._id.toString() },
      process.env.SECRET
    );
    this.tokens = this.tokens.concat({ token: token });
    this.save();
    return token;
  } catch (error) {
    console.log("Some technical issue");
  }
};

const loginmodule = database.model("registration", loginSchema);
module.exports = loginmodule;
