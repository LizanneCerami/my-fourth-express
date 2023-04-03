import express from "express";

const PORT = 3000

const app = express()

app.get("/", (req, res) => {
  res.send("Index")
});

app.get("/puppies", (req, res) => {
  res.send("Puppies are cute!");
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
});