// api router file
const api_router = require('express').Router();

api_router.get('/', (req, res)=>{
    res.json({
        answer: "this is api res",
    })
})

module.exports = api_router;