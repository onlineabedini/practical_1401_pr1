// total
function total_middleware(req, res, next) {
    console.log('total middleware is working')
    next();
}

// get all
function get_all_middleware(req, res, next) {
    console.log('get all middleware is working')
    next();
}

// get by id
function get_id_middleware(req, res, next) {
    console.log('get_id middleware is working')
    next();
}

// get by group
function get_group_middleware(req, res, next) {
    console.log('get group middleware is working')
    next();
}

// make
function make_middleware(req, res, next) {
    console.log('make middleware middleware is working')
    next();
}

// update
function update_middleware(req, res, next) {
    console.log('update middleware middleware is working')
    next();
}

// delete
function delete_middleware(req, res, next) {
    console.log('delete middleware is working')
    next();
}

module.exports = {
    total_middleware,
    get_all_middleware,
    get_id_middleware,
    get_group_middleware,
    make_middleware,
    update_middleware,
    delete_middleware
}
