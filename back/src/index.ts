import express from "express";
import post from "./api/post";
import swaggerUi from "swagger-ui-express";
import cors from "cors";

const swaggerDocument = require("../swagger.json");
import * as middlewares from "./middlewares";
const app = express();
const port = 5005; // default port to listen

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.post("/", post);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
