import mongoose from "mongoose";
const Schema = mongoose.Schema;

const petSchema = new Schema({
  petType: {
    type: String,
    required: true,
    default: "",
  },
  name: {
    type: String,
    required: true,
    default: "",
  },
  breed: {
    type: String,
    required: true,
    default: "",
  },
  age: {
    type: Number,
    required: true,
    default: "",
  },
});

const petSchemaa = mongoose.model("Pets", petSchema);
export default petSchemaa;
