const express = require("express");
const router = express.Router();
const categories = require("../controller/CategoryController");

router.route("/addPost").post(categories.createCategories);
router.route("/").get(categories.getCategories);
router.route("/:id").put(categories.updateCats);
module.exports = router;
