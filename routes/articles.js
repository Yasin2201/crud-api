const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');

router.get('/', (req, res) => {
    const drafts = req.app.db.get("drafts")
    res.status(200).json({ drafts })
})

router.get('/:id', (req, res) => {
    const draft = req.app.db.get("drafts").find({ id: req.params.id }).value()
    res.status(200).json({ draft })
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

router.put('/:id', (req, res) => {
    try {
        if (!req.body.article) {
            res.status(400).json({ error: 'Article input empty' })
        } else {
            req.app.db.get("drafts").find({ id: req.params.id }).assign({ article: req.body.article }).write()
            res.json({ alert: 'Updated Article' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error' })
    }
})

router.delete('/:id', (req, res) => {
    try {
        const draft = req.app.db.get("drafts").find({ id: req.params.id }).value()

        if (draft) {
            req.app.db.get("drafts").remove({ id: req.params.id }).write()
            res.status(200).json({ alert: 'Article deleted' })
        } else {
            res.status(404).json({ error: 'Article not found' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error' })
    }
})

module.exports = router;