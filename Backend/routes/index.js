const routerExperts = require('./expertsRouter.js');
const routerUsers = require('./usersRouter.js');
const routerMock = require('./mockExpertsRouter.js');

function RoutersAPI(app) {
    app.use('/expert', routerExperts);
    app.use('/user', routerUsers);
    app.use('/mock/expert', routerMock);
}

module.exports = RoutersAPI;