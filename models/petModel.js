import petSchemaa from "./petSchema.js";
import adoptPetSchemaa from "./adoptPetSchema.js";
import giveAwayPetSchemaa from "./giveAwayPetSchema.js";

const createPet = (petData) => {
  return new Promise((resolve, reject) => {
    try {
      petSchemaa(petData)
        .save()
        .then((data) => {
          resolve(data);
        });
    } catch (error) {
      reject(error);
    }
  });
};

const adoptPet = (formData) => {
  return new Promise((resolve, reject) => {
    try {
      adoptPetSchemaa(formData)
        .save()
        .then((data) => {
          resolve(data);
        });
    } catch (error) {
      reject(error);
    }
  });
};

const giveAwayPet = (formData) => {
  return new Promise((resolve, reject) => {
    try {
      giveAwayPetSchemaa(formData)
        .save()
        .then((data) => {
          resolve(data);
        });
    } catch (error) {
      reject(error);
    }
  });
};

const getPet = () => {
  return new Promise((resolve, reject) => {
    try {
      petSchemaa.find({}).then((data) => {
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getPetByType = (type) => {
  return new Promise((resolve, reject) => {
    try {
      petSchemaa.find(type).then((data) => {
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export { createPet, getPet, getPetByType, adoptPet, giveAwayPet };
