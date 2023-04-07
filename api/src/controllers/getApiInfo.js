const axios = require("axios")
require('dotenv').config();
const {APIKEY} = process.env

const getApiInfo = async () => {
  const apiF = `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5/information&number=100&addRecipeInformation=true`
    const api = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=100`
       const all = await axios.get(apiF)
       const recipes = all.data.results.map(recipe => {
        return {
              id:recipe.id,
              name: recipe.title,
              // summary : recipe.summary,
              healthScore: recipe.healthScore,
              dishSummary: recipe.summary,
              image : recipe.image,
              vegetarian : recipe.vegetarian,
              vegan : recipe.vegan,
              glutenFree : recipe.glutenFree,
              analyzedInstructions: recipe.analyzedInstructions.map(e => e.steps.map(e => e.step)),
              diets : recipe.diets.map(diet => diet = {name : diet})
        }
       });
        return recipes
}

module.exports = getApiInfo