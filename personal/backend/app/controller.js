const articles = require('./data/articles');
const samples = require('./data/samples');

// conteroller file
class article_controller {
    // get all articles
    get_all_articles(req, res) {
        res.json(articles)
    }

    // get article by id
    get_article_by_id(req, res) {
        const id = req.params.id;
        const article = articles.find(article => article.id == id);
        if (!article) {
            res.status(404).send('Not found');
        } else {
            res.json(article);
        }
    }
}

class sample_controller {
    // get all samples
    get_all_samples(req, res) {
        res.json(samples)
    }

    // get sample by id
    get_sample_by_id(req, res) {
        const id = req.params.id;
        const sample = samples.find(sample => sample.id == id);
        if (!sample) {
            res.status(404).send('Not found');
        } else {
            res.json(sample);
        }
    }
}

module.exports = {
    article_controller: new article_controller,
    sample_controller: new sample_controller
}