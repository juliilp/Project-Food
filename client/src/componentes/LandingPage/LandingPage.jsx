import { Link } from "react-router-dom";
import food4 from "./girlfood4.png";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="main-container-landingpage">
      <div className="container-imagen">
        <img src={food4} alt="food-girl" className="img-landingpage" />
      </div>
      <div className="landing">
        <h1 className="tituloLandingpage">
          Discover a unique culinary experience with over 300 dishes on our food
          website.
        </h1>
        <p className="parrafoLandingpage">
          Welcome to our food website, where you will find a wide variety of
          dishes to satisfy your cravings. You can search and filter your
          favorite dishes according to your dietary needs and preferences.
        </p>
        <div className="container-button-landingpage">
          <Link to="/home">
            {" "}
            <button className="buttonLandingpage">
              Click here to go to the recipes!
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
