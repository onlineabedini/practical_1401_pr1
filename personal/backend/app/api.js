// api router file
const api_router = require('express').Router();

api_router.get('/', (req, res)=>{
    res.json({
        answer: "this is api res",
    })
})
api_router.get('/sample', (req, res)=>{
    res.json({
        answer: "this is api sample res",
    })
})

api_router.get('/article', (req, res)=>{
    res.json({
        answer: "this is api article res",
    })
})

module.exports = api_router;