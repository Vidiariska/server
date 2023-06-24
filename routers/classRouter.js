const router = require("express").Router();
const ClassController = require("../controllers/classController");

router.get("/", ClassController.getClass);
router.post("/create", ClassController.addClass);

module.exports = router;
