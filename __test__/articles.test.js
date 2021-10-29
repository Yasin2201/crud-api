const request = require("supertest");
const app = require('../app');

describe('When user makes a POST request', () => {
    test("POST / should respond status code 200 and new Article", done => {
        request(app)
            .post("/")
            .type("form")
            .send({
                id: "b3rsb4s84",
                article: "New Posted article",
            })
            .expect("Content-Type", /json/)
            .expect(200, done);
    });

    test("empty POST / should respond status code 400 and error message", done => {
        request(app)
            .post("/")
            .type("form")
            .send({ article: '' })
            .expect("Content-Type", /json/)
            .expect({ error: 'Article input empty' })
            .expect(400, done);
    });
})

describe('When user makes a GET request', () => {
    it.todo("GET '/' should respond status code 200")
    it.todo("GET '/:id' should respond status code 200")
})

describe('When user makes a PUT request', () => {
    it.todo("PUT '/:id' should respond status code 200 and updated Article")
    it.todo("empty PUT '/:id' should respond status code 400 and error message")
})

describe('When user makes a DELETE request', () => {
    it.todo("DELETE '/:id' should respond status code 200 and updated Article")
    it.todo("non-existent DELETE '/:id' should respond status code 404 and error message")
})

