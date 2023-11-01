const newRouter = require('./new.routers');
const siteRouter = require('./site.routers');
const coursesRouter = require('./courses.routers')
const meRouter = require('./me.routers')

function route(app) {
    app.use('/news', newRouter);

    app.use('/me', meRouter);
    
    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
}

module.exports = route;
