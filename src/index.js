import express from "express";
import renderer from "./helpers/renderer";

const app = express();
app.use(express.static("public"));

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(renderer());
});

app.listen(PORT, () => {
  console.log(`${PORT} port is running...`);
});
