import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./Detail_modules.css";
import axios from "axios";
const Detail = (props) => {
  const { id } = useParams();
  const [detailReceta, setDetailReceta] = useState();
  useEffect(() => {
    async function fetchReceta() {
      const result = await axios(`/recipes/${id}`);
      setDetailReceta(result.data);
    }
    fetchReceta();
  }, []);
  return (
    <div className="container_details">
      {detailReceta ? (
        <div className="card_detail">
          <h1 className="detail_titulo">{detailReceta.name}</h1>
          <img
            src={detailReceta.image}
            alt="imagen not found"
            className="imagen_detail"
          />
          <h2 className="detail_titulo">Dish Summary</h2>
          <p className="resumen_detail">
            {detailReceta.dishSummary.replace(/<[^>]*>?/g, "")}
          </p>
          <Link to="/home">
            <button className="button_detail">Back to HOME</button>
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
