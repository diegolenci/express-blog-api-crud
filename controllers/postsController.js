const posts = require('../data/posts');

function index(req, res) {
    res.json(posts)
}

function show(req, res) {
    
}

function store(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)
    res.json(post)
}

function update(req, res) {
    
}

function patch(req, res) {
    
}

function destroy(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)
    posts.splice(posts.indexOf(post), 1)

    res.sendStatus(204)
    
}

module.exports = { index, show, store, update, patch, destroy }