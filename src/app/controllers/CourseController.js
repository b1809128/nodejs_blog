const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {

    // [GET]:slug
    show(req, res, next) {
        //res.send('Course DETAIL' + req.params.slug)
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                // res.json(course)
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next)
    }
}

module.exports = new CourseController