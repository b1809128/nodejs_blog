const Course = require('../models/Course')

class SiteController {
    // [GET] /news
    index(req, res) {
        Course.find({}, function(err, courses) {
                if (!err) { res.json(courses) } else
                    res.status(400).json({ error: 'Error !' })
            })
            // res.render('home')
    }

    // [GET]:slug
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController