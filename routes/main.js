const express = require(`express`);
const router = express.Router();
const fs = require(`fs`)
const mainController = require(`../controllers/mainController`)

router.get(`/`, mainController.index)
router.get(`/creditos`, mainController.creditos)

module.exports = router