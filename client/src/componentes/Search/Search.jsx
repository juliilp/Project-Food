import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipes } from "../../redux/actions";
import style from "./Search_modules.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
const SearchBar = () => {
  const dispatch = useDispatch();
  // const getRecipes = useSelector((state) => state.recipesName)
  const [name, setName] = useState("");

  const handlerInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(getNameRecipes(name));
    setName("");
  };

  return (
    <div className="input_button_search_container">
      <div>
        <input
          className="input_search"
          type="text"
          placeholder="Search..."
          onChange={(e) => handlerInputChange(e)}
        />
        <button
          className="button_search"
          type="submit"
          onClick={(e) => handlerSubmit(e)}
        >
          <BiSearch size={15} color="black" />
        </button>
      </div>
      <Link to="/recipes/">
        <button className="crear_recetas">Crear Receta</button>
      </Link>
    </div>
  );
};

export default SearchBar;
