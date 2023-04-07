import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postRecipes, getDiets } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import s from "./recipeCreate_modules.css";

const RecipeCreate = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const history = useHistory();
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    image: "",
    healthScore: "",
    stepByStep: "",
    dishSummary: "",
    diets: [],
  });

  const validacionName = (input) => {
    const error = {};
    if (!input.name) {
      error.name = "Se requiere un nombre";
    }
    if (!input.dishSummary) {
      error.dishSummary = "Se require escribir";
    }
    return error;
  };

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validacionName({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        diets: [...input.diets, e.target.value],
      });
    }
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRecipes(input));
    alert("Receta Creada !!");
    setInput({
      name: "",
      image: "",
      healthScore: "",
      stepByStep: "",
      dishSummary: "",
      diets: [],
    });
    history.push("/home");
  };

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div className="recipeCreate_container">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="recipe_card_form_container"
      >
        <div className="container_label_input_create">
          <h2 className="Titulo">Create your recipe!</h2>
          <label className="label_recipe_create">Name</label>
          <input
            className="input_recipe_create"
            type="text"
            placeholder=""
            value={input.name}
            name="name"
            onChange={handleInput}
          />
          {error.name && <p className="error">{error.name}</p>}

          <label className="label_recipe_create">Image</label>
          <input
            className="input_recipe_create"
            type="text"
            placeholder=""
            value={input.image}
            id="imagen"
            name="image"
            onChange={(e) => handleInput(e)}
          />

          <label className="label_recipe_create">Health score</label>
          <input
            defaultValue={0}
            type="range"
            placeholder=""
            value={input.healthScore}
            name="healthScore"
            onChange={handleInput}
          />
          <p className="numeroHS" defaultValue={0}>
            {input.healthScore}
          </p>

          <label className="label_recipe_create">Step by step</label>
          <input
            className="input_recipe_create"
            type="text"
            placeholder=""
            value={input.stepByStep}
            name="stepByStep"
            onChange={handleInput}
          />

          <label className="label_recipe_create">Dish summary</label>
          <textarea
            name="dishSummary"
            cols="40"
            rows="3"
            value={input.dishSummary}
            onChange={handleInput}
            placeholder=""
          />
          {error.dishSummary && <p>{error.dishSummary}</p>}
        </div>
        <h2>Diet's types</h2>
        {diets.map((e) => (
          <div>
            <label>{e.name.replace(/^\w/, (c) => c.toUpperCase())} </label>
            <input
              type="checkbox"
              value={e.name}
              name={e.name}
              onChange={(e) => handleCheck(e)}
            />
          </div>
        ))}

        <Link to="/Home">
          <button className="button_create_recipe  ">Back to home</button>
        </Link>
        <button className="button_create_recipe boton_create ">
          Create your recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeCreate;
