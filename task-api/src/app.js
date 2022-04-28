const express = require("express");
const bodyParser = require("body-parser");
const playList = require("./service.js");
const cors = require('cors')

const PORT = 1955;
const app = express();

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Access-Control-Allow-Origin', 'Origin', 'Content-Type', 'X-Auth-Token'],
  exposedHeaders: [],
  preflightContinue: true,
  optionsSuccessStatus: 204
}))
app.options('*', cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/playlist", (_, res) => {
  res.status(200).send(playList.get());
});
app.post("/api/add", (req, res) => {
  playList.add(req.body);
  res.status(201).send(req.body);
});
app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});