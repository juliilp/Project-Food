import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/actions";
import { Link } from "react-router-dom";
import s from "./Detail_modules.css";

const Detail = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch]);

  return (
    <div className="container_details">
      {data ? (
        data.map((e) => (
          <div className="card_detail">
            <h1 className="detail_titulo">{e.name}</h1>
            <img
              src={e.image}
              alt="imagen not found"
              className="imagen_detail"
            />
            <h2 className="detail_titulo">Dish Summary</h2>
            <p className="resumen_detail">
              {e.dishSummary.replace(/<[^>]*>?/g, "")}
            </p>
            {/* <h2 className="detail_titulo">Suitable for vegans</h2>
            {e.diets.map((e) => (
              <span className="dietas_detail">
                {e.name.replace(/^\w/, (c) => c.toUpperCase())}{" "}
              </span>
            ))} */}

            <Link to="/home">
              <button className="button_detail">Back to HOME</button>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
