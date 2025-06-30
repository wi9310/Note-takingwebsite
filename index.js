import bodyParser from "body-parser";
import express from "express";

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.get()

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

