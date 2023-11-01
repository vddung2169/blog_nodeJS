const morgan = require("morgan");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const handlebars = require("express-handlebars").engine;

const route = require("./routes");

const db = require("./config/db");

// Connect Database
db.connect();

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
const port = 3000;

app.use(methodOverride("_method"));

// XMLhttpRequest, fetch, axios

//HTTP logger
// app.use(morgan('combined'))

//Template engiÍne
app.engine(
  "hbs",
  handlebars({ extname: ".hbs", helpers: { sum: (a, b) => a + b } })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
