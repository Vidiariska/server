const router = require("express").Router();
const ClassRouter = require("./classRouter");

router.get("/", (req, res) => {
  res.send("Hallo Vidia");
});

router.use("/class", ClassRouter);

module.exports = router;
