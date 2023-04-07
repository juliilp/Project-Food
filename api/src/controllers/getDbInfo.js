const {Recipe, Diet} = require("../db")

const getDBInfo= async () =>{
  const dbRecipe = await Recipe.findAll({
      include:{
          model: Diet,
          attributes: ["name"],
          through:{
              attributes: []
          }
      }
  })
  return dbRecipe
}
  module.exports = getDBInfo