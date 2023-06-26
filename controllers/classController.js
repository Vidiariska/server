const { Class } = require("../models");

class ClassController {
  // CREATE
  static addClass(req, res) {
    /**
     *  1 . req.query
     *  2. req. params
     *  3. req.body
     *
     */
    let object = {
      name: req.body.name,
      building: req.body.building,
      floor: Number(req.body.floor),
    };

    console.log(object);

    Class.create(object)
      .then((_) => {
        res.status(200).json({ message: "succesfully create class" });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }

  // GET
  static getClass(req, res) {
    Class.findAll()
      .then((data) => {
        res
          .status(200)
          .json({ message: "succesfully get data class", datas: data });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  }

  //UPDATE
  static updateClass(req, res) {}

  //DELETE
  static deleteClass(req, res) {}
}

module.exports = ClassController;
