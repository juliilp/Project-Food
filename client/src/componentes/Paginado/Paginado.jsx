import React from "react";
import s from "./Paginado_modules.css";

export default function Paginado({ recipesPerPage, allRecipes, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <footer>
      <ul className="main-paginado">
        {pageNumbers?.map((number) => (
          <button
            className="button_paginado"
            onClick={() => paginado(number)}
            key={number}
          >
            {number}{" "}
          </button>
        ))}
      </ul>
    </footer>
  );
}
