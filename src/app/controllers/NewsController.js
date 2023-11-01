class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    //  [GET] /news/:slug
    show(req, res) {
        res.send('NEW DETAIL SLUG');
    }
}

module.exports = new NewsController;
