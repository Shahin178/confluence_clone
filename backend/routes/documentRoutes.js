const express = require("express");
const router = express.Router();
const docCtrl = require("../controllers/documentController");
const auth = require("../middlewares/authMiddleware");

router.post("/", auth, docCtrl.createDoc);
router.get("/", auth, docCtrl.getDocs);
router.put("/:id", auth, docCtrl.updateDoc);

module.exports = router;
