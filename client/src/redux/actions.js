import axios from 'axios'

export const getRecipes = () => {
  return async function(dispatch) {
   try {
    let response = await axios.get("http://localhost:3001/recipes/")
    let response2 = response.data
    
  dispatch({
    type: "ALL_RECIPES",
    payload: response2
  })
} 
    catch (error) {
      dispatch({
        type: "ERROR",
        payload : error.message
      })
   }
}
}

export const getNameRecipes = (name) => {
    return  async (dispatch) => {
      try {
        let response = await axios.get(`http://localhost:3001/recipes?name=${name}`)
        let response2 = response.data

        dispatch({
          type: "GET_NAME_RECIPES",
          payload: response2
        })
      } catch (error) {
        dispatch({
          type: "ERROR",
          payload : error.message
        })
      }
    }
  } 


  
  
  export const orderByName = (payload) => {
    return {
      type: 'ORDER_BY_NAME',
      payload
    }
  }
  
  export const orderByHealthScore = (payload) => {
    return {
      type: 'ORDER_BY_HEALTHSCORE',
      payload
    }
  }
  
  
  // export const getDiets = (payload) => {
  //   return async (dispatch) => {
  //     const info = await axios.get("http://localhost:3001/diets", payload)
  //     return dispatch({type : "GET_DIETS", payload : info.data})
  //   }
  // }
  
  
export const postRecipes = (payload) => {
  return async () => {
      const infoPost =  await axios.post("http://localhost:3001/recipes/", payload)
      return infoPost
  }
}


export const getDetails = (id) => {
  return  async (dispatch) => {
    const getId = await axios.get(`http://localhost:3001/recipes/${id}`)
    return dispatch({
      type : "GET_DETAILS",
      payload: getId.data
    })
  }
}


export function orderByScore(payload) {
  return {
      type: "ORDER_BY_SCORE",
      payload
  }
}


export function getDiets() { 
  return  async function(dispatch) {
    const json = await axios.get("http://localhost:3001/diets")
    return dispatch({
          type : "GET_DIETS",
          payload: json.data
    })
  }
}



export function filterByTypeDiet(payload) {
  return {
      type: "FILTER_BY_TYPE_DIET",
      payload
  }
};
