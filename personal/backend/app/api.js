const controller = require('./controller');
const router = require('express').Router();
router.get('/article', (req, res) => controller.article_controller.get_all_articles(req, res))
router.get('/article/:id', (req, res) => controller.article_controller.get_article_by_id(req, res))

router.get('/sample', (req, res) => controller.sample_controller.get_all_samples(req, res))
router.get('/sample/:id', (req, res) => controller.sample_controller.get_sample_by_id(req, res))

module.exports = router;