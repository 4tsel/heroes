const express = require(`express`);
const router = express.Router();
const fs = require(`fs`)
const heroesController = require(`../controllers/heroesController.js`)

router.get(`/`, heroesController.index)
router.get('/detalle/:id', heroesController.heroesDetalles);
router.get('/bio/:id/:palabra?', heroesController.heroesConResenia);

module.exports = router;