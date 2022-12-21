import mongoose from "mongoose";
const Schema = mongoose.Schema;

const giveAwayPetSchema = new Schema({
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

const giveAwayPetSchemaa = mongoose.model("Give Away", giveAwayPetSchema);
export default giveAwayPetSchemaa;
