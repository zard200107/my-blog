import dotenv from "dotenv";
import express from "express";
import expressLayouts from "express-ejs-layouts";

import mainRouter from "./server/routes/main.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("public"));

app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use(mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
