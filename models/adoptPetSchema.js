import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adoptPetSchema = new Schema({
  petType: {
    type: String,
    default: "",
  },
  breed: {
    type: String,
    default: "",
  },
  fullName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
});

const adoptPetSchemaa = mongoose.model("Adopt Pets", adoptPetSchema);
export default adoptPetSchemaa;
