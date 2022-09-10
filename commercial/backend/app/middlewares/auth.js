// total
function total_middleware(req, res, next) {
    console.log('total middleware is working')
    next();
}

// total
function login_middleware(req, res, next) {
    console.log('login middleware is working')
    next();
}

// get all
function register_middleware(req, res, next) {
    console.log('register middleware is working')
    next();
}

module.exports = {
    total_middleware,
    login_middleware,
    register_middleware,
}
