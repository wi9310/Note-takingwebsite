import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 5500;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  console.log(__dirname + "/public/index.html") //log path
  res.sendFile(__dirname + "/public/index.html");

})

app.post('/submit', (req, res) => {
  console.log(req)
}) 

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

