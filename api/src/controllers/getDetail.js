require('dotenv').config();
const {APIKEY} = process.env
const getDBData = require("./getDbInfo")
const axios = require("axios")
const getDbyApiInfo = require("../controllers/getDbyApiInfo")





const getApiInfoById = async (id) => {
  const api = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY}&addRecipeInformation=true`
  if(id.includes("-")){
    apiInfo = await getDbyApiInfo()
    apiInfo = apiInfo.filter((e) => e.id === id)
    
    return apiInfo
  } else {
    const infoApiRecipes = await axios.get(api)
    const recipe = infoApiRecipes.data

    const apiInfo = [{
      id:recipe.id,
      name: recipe.title,
      // summary : recipe.summary,
      healthScore: recipe.healthScore,
      dishSummary: recipe.summary.replace(/<[^>]*>?/g,''),
      image : recipe.image,
      vegetarian : recipe.vegetarian,
      vegan : recipe.vegan,
      glutenFree : recipe.glutenFree,

      steps:
      recipe.analyzedInstructions[0] && recipe.analyzedInstructions[0].steps
        ? recipe.analyzedInstructions[0].steps
            .map((item) => item.step)
            .join(" \n")
        : "",

      diets : recipe.diets?.map(diet => diet = {name : diet}),
      // dishTips : dishTypes.map((e) => e)
    }]
    return apiInfo
  }
}

module.exports = getApiInfoById