// GET METHOD
app.get("/api", (req, res) => {
    Name.find({}, (err, persons) => {
      res.render("persons", { persons: persons });
    });
  });
  // POST METHOD
  app.post("/api", async (req, res) => {
    const person = new Name({
      name: req.body.name,
    });
    try {
      await person.save();
      res.redirect("/api");
    } catch (err) {
      res.redirect("/api");
    }
  });
  
  //UPDATE
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
  //DELETE
  app.route("/api/delete/:id").get((req, res) => {
    const id = req.params.id;
    Name.findByIdAndRemove(id, (err) => {
      if (err) return res.send(500, err);
      res.redirect("/api");
    });
  });