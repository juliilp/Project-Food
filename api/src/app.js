const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const recipesRoutes = require("./routes/recipesRoutes.js");
const dietsRoutes = require("./routes/dietsRoutes.js");
const cors = require("cors");

require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(
  cors({
    origin: "https://project-food-two.vercel.app",
    credentials: true,
  })
);
server.use(morgan("dev"));
server.use(express.json());

server.use("/recipes", recipesRoutes);
server.use("/diets", dietsRoutes);

// Error catching endware.
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
