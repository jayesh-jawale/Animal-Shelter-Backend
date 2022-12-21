import express from "express";
const router = express.Router();

import {
  createPet,
  getPet,
  getPetByType,
  adoptPet,
  giveAwayPet,
} from "../models/petModel.js";

router.all("/", (req, res, next) => {
  // res.send("Message from pet Router");
  next();
});

// Create pet
router.post("/create-pet", async (req, res) => {
  const petData = req.body;

  const result = await createPet(petData);

  if (result) {
    res.json({
      status: "success",
      message: "Pet has been created!",
    });
  } else {
    res.json({
      status: "error",
      message: "Unable to create pet!",
    });
  }
});

// Get all pets
router.get("/get-pets", async (req, res) => {
  const result = await getPet();

  if (result) {
    return res.json({
      status: "success",
      result,
    });
  }

  res.json({
    status: "error",
    message: "Cannot get pets",
  });
});

// Get pet by type
router.get("/get-pets/type", async (req, res) => {
  const type = req.query;
  const result = await getPetByType(type);

  if (result) {
    return res.json({
      status: "success",
      result,
    });
  }

  res.json({
    status: "error",
    message: "Cannot get pets",
  });
});

// Request for adoption form
router.post("/adopt-pet", async (req, res) => {
  const formData = req.body;
  const result = await adoptPet(formData);

  if (result) {
    return res.json({
      status: "success",
      message: "Requested for Adoptin",
    });
  }

  res.json({
    status: "error",
    message: "Cannot request for Adoptin",
  });
});

// Give away pet form
router.post("/give-pet", async (req, res) => {
  const formData = req.body;
  const result = await giveAwayPet(formData);

  if (result) {
    return res.json({
      status: "success",
      message: "Requested for Give away",
    });
  }

  res.json({
    status: "error",
    message: "Cannot request for Give away",
  });
});

export const petRouter = router;
