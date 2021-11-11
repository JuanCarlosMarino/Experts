const routerExperts = require('./expertsRouter.js');
const routerUsers = require('./usersRouter.js');

function RoutersAPI(app) {
    app.use('/expert', routerExperts);
    app.use('/user', routerUsers);
}

module.exports = RoutersAPI;