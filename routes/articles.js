const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');

router.get('/', (req, res) => {
    const drafts = req.app.db.get("drafts")
    res.status(200).json({ drafts })
})

router.post('/', (req, res) => {
    try {
        // check if input is empty
        if (!req.body.article) {
            res.status(400).json({ error: 'Article input empty' })
        } else {
            const article = {
                //for tests only when id is passed into test POST data req.body.id used instead of uniqid
                id: req.body.id || uniqid(),
                article: req.body.article
            }
            req.app.db.get("drafts").push(article).write()
            res.json({ article })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error' })
    }
})

module.exports = router;