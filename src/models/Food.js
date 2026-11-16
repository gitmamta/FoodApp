
import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  foodType: {
    type: String,
    enum: ["Veg"],
    default: "Veg"
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.models.Food ||
  mongoose.model("Food", FoodSchema);
