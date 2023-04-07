const express = require("express")
const { Recipe, Diet } = require("../db")
const getDbyApiInfo = require("../controllers/getDbyApiInfo")
const getApiInfoById = require("../controllers/getDetail")
const {APIKEY} = process.env
const axios = require("axios")


const recipesRoutes = express.Router()



  
recipesRoutes.get("/", async (req,res) => {
  
  const {name} = req.query
    const allRecipes = await getDbyApiInfo()
  try {
    if(name) {
      const recipesByName = allRecipes.filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()))
      res.send(recipesByName)
    }
    if (!name) return res.status(200).json(allRecipes)
  } catch (error) {
    res.status(400).json(error.message)
  }
})
 




recipesRoutes.get("/:id", async(req,res) => {
      try {
        const {id} = req.params
        const recipeId = await getApiInfoById(id)
        res.status(200).send(recipeId)
} catch (error) {
   res.status(400).send(error.message)
}
})







// Post ya está hecho
recipesRoutes.post("/", async (req,res) => {
  const {name, dishSummary, healthScore, stepByStep, diets, image} = req.body
  try {

    if (!dishSummary || !name || !diets) {
      throw Error ('Missing Data')
    }else {
      newRecipes = await Recipe.create({name,dishSummary, healthScore, stepByStep, image, diets})
      console.log(diets);
      let recipeDb = await Diet.findAll({
        where : { name : diets}
      })
      await newRecipes.addDiet(recipeDb)
          

      res.status(200).send(newRecipes)
    }





  } catch (error) {
    res.status(400).send(error.message)
  }
})





// router.get('/', async (req, res, next) => {
//   const { name } = req.query;
//   const dbRecipes = await getConcat(next);
//   try {
//     if (name) {
//       const resultFind = dbRecipes.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));
//       if (resultFind.length === 0) {
//         return res.status(404).send({ message: 'No recipes found' });
//       }
//       return res.send(resultFind);
//     } else {
//       return res.send(dbRecipes);
//     }
//   } catch (error) {
//     next(error);
//   }














module.exports = recipesRoutes

