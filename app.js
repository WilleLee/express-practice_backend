import express from "express";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  return res.send("hello server!");
});

app.listen(port, () => {
  console.log(`The server is listening to the port ${port}`);
});
