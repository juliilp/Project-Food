// const { default: axios } = require("axios");
const axios = require("axios")
const express = require("express")
const { Diet } = require("../db")
const dietsRoutes = express.Router()
// const {Router} = require("express");  
require('dotenv').config();
const {APIKEY} = process.env

const search  = require("../controllers/allApi")









dietsRoutes.get("/", async (req, res) => {
  try {

      const diets = await Diet.findAll();
      if (diets.length) return res.status(200).json(diets);

      const call = search.results;
     const dietsFromApi = [];
      call.forEach(el => el.diets.forEach((nombre) => dietsFromApi.push(nombre)))

      const dietsfinal = new Set(dietsFromApi);
        
      // const array = Array.from(dietsfinal)
      const array2 = [];
      dietsfinal.forEach(el => array2.push({name: el}));
      const created = await Diet.bulkCreate(array2);

      res.status(200).send(created);

  } catch (err) {
      res.status(404).send( err.message );
  }
});


// const addBasicsDiets = async() => {
//   const recipesApi = await allApi();
//   const allDiets = recipesApi.results.map(recipe => recipe.diets);
//   allDiets.forEach(dietsPerRecipe => {
//       dietsPerRecipe.map(diet => { // diet es un array de dietas. Por c/ dieta 
//           Diet.findOrCreate({ // encontrame o creame la dieta
//               where: {name : diet.name}
//           })
//       })
//   });
//   const totalDiets = await Diet.findAll();
//   return totalDiets;
// }



// dietsRoutes.get('/', async (req, res) => {
//   let allDiets = await Diet.findAll();
//   try {
//       if (!allDiets[0]) await addBasicsDiets();
//       allDiets = await Diet.findAll();
//       return res.status(200).json(allDiets);
//   } catch (error) {
//       res.status(400).json(error.message);
//   }   
// });





module.exports = dietsRoutes

