import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gmail: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const customers = model("CustomerModel", customerSchema);
export default customers;
