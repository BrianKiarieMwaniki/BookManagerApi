const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {uploadFiles} = require("../controllers/upload");

router.post("/", upload.single("file"), uploadFiles);

module.exports = router;