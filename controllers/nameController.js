const fs = require("node:fs");
const Name = require("../models/name");
const { v4: uuid } = require("uuid");
const path = require("node:path");

// create new Name
exports.addName = async (req, res) => {
  // res.setHeader("content-type", "text/html");
  try {
    const name = new Name({
      id: uuid(),
      name: req.body.name,
    });

    // Save Name in the database
    name.save().then((newName) => {
      // res.send(newName);
      // fs.createReadStream(path.join(__dirname, "../views", "home.html")).pipe(
      //   res
      // );
      res.redirect("/api");
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get all names
exports.getNames = async (req, res) => {
  try {
    Name.find().then((names) => {
      res.send(names);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// get single name
exports.getName = async (req, res) => {
  try {
    Name.findById(req.params.id).then((name) => {
      if (!name) {
        return res.status(404).send({
          message: "Name not found with id " + req.params.id,
        });
      }
      res.send(name);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// update / edit name
exports.updateName = async (req, res) => {
  try {
    Name.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
      },
      { new: true }
    ).then((name) => {
      if (!name) {
        return res.status(404).send({
          message: "Name not found with id " + req.params.id,
        });
      }
      res.send({ message: "Name updated successfully!", name });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// delete name
exports.deleteName = async (req, res) => {
  try {
    Name.findByIdAndRemove(req.params.id).then((name) => {
      if (!name) {
        return res.status(404).send({
          message: "Name not found with id " + req.params.id,
        });
      }
      res.send({ message: "Name deleted successfully!", name });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
