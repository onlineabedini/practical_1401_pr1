// conteroller file

const article_list = require('./../data/article')
const sample_list = require('./../data/sample') 
class article_controller {
    // 
    // get all articles
    get_all_articles(req, res) {
        res.json(article_list)
    }

    // get article by id
    get_article_by_id() {}

    // create article
    create_article() {}

    // update article
    update_article() {}

    // delete article
    delete_article() {}
}

class sample_controller{
    // 
    // get all samples
    get_all_samples(req, res) {
        res.json(sample_list)
    }  

    // get sample by id
    get_sample_by_id() {}

    // create sample
    create_sample() {}

    // update sample
    update_sample() {}

    // delete sample
    delete_sample() {}
}

module.exports = {
    article_controller: new article_controller,
    sample_controller : new sample_controller
}