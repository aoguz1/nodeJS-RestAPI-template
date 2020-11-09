import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

app.post("/", function (req, res) {
  res.send("POST request to the homepage");
});

app.listen(3000, () => {
  console.log("3000 portu çalıştırıldı");
});
