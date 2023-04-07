// import allRecipes from "./actions"

const initialState = {
  recipes: [],
  showedRecipes: [],
  error: "",
  recipesName: "",
  diets: [],
  detail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_RECIPES":
      return {
        ...state,
        recipes: action.payload,
        showedRecipes: action.payload,
        detail: [],
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "GET_NAME_RECIPES":
      return {
        ...state,
        recipes: action.payload,
      };
    case "ORDER_BY_NAME":
      let sortByAlphabet = [...state.showedRecipes];
      sortByAlphabet =
        action.payload === "asc"
          ? state.showedRecipes.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            })
          : state.showedRecipes.sort(function (a, b) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              return 0;
            });
      return {
        ...state,
        showedRecipes: sortByAlphabet,
      };

    case "ORDER_BY_SCORE":
      let sortedByScore = [...state.showedRecipes];

      sortedByScore =
        action.payload === "max"
          ? state.showedRecipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) return 1;
              if (a.healthScore < b.healthScore) return -1;
              return 0;
            })
          : state.showedRecipes.sort(function (a, b) {
              if (a.healthScore < b.healthScore) return 1;
              if (a.healthScore > b.healthScore) return -1;
              return 0;
            });
      return {
        ...state,
        showedRecipes: sortedByScore,
      };

    case "POST_RECIPES":
      return {
        ...state,
      };

    case "GET_DIETS":
      return {
        ...state,
        diets: action.payload,
      };
    case "GET_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };

    case "FILTER_BY_TYPE_DIET":
      const showedRecipes = state.showedRecipes;
      const filter =
        action.payload === "all"
          ? showedRecipes
          : showedRecipes.filter((r) => r.diets.includes(action.payload));
      return {
        ...state,
        recipes: filter,
      };

    default:
      return { ...state };
  }
};

export default reducer;
