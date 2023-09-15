const Name = require("./models/name");
const express = require("express"),
  { json } = require("express"),
  bodyParser = require("body-parser"),
  name = require("./routes/nameRoute");
const { PORT } = process.env;
require("dotenv").config();
const connect = require("./db/database");
connect();

const app = express();
app.use("/static", express.static("public"));

app.set("view engine", "ejs");

app.use(json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", name);
// GET METHOD
app.get("/api", (req, res) => {
  Name.find({}, (err, persons) => {
    res.render("home", { persons: persons });
  });
});

app.get("/", (req, res) => {
  res.render("landing");
});
// UPDATE
app
  .route("/api/update/:id")
  .get((req, res) => {
    const id = req.params.id;
    Name.find({}, (err, persons) => {
      res.render("personUpdate", { persons: persons, idPerson: id });
    });
  })
  .post((req, res) => {
    const id = req.params.id;
    Name.findByIdAndUpdate(id, { name: req.body.name }, (err) => {
      if (err) return res.send(500, err);
      res.redirect("/api");
    });
  });
// DELETE
app.route("/api/delete/:id").get((req, res) => {
  const id = req.params.id;
  Name.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    res.redirect("/api");
  });
});
app.get("/api", (req, res) => {
  res.render("home");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
