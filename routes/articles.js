const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');

router.post('/', (req, res) => {
    try {
        const article = {
            //for tests only when id is passed into test POST data req.body.id used instead of uniqid
            id: req.body.id || uniqid(),
            article: req.body.article
        }
        req.app.db.get("drafts").push(article).write()
        res.json({ article })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error' })
    }
})

module.exports = router;