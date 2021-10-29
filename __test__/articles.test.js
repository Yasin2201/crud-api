const request = require("supertest");
const app = require('../app');

describe('When user makes a POST request', () => {
    test("POST / should respond status code 200 and new Article", done => {
        request(app)
            .post("/")
            .type("form")
            .send({
                id: "b3rsb4s84",
                title: "New Title",
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
    test("GET / should respond status code 200", done => {
        request(app)
            .get("/")
            .expect("Content-Type", /json/)
            .expect(200, done);
    });

    test("GET /:id should respond status code 200", done => {
        request(app)
            .get("/b3rsb4s84")
            .expect("Content-Type", /json/)
            .expect({
                draft: {
                    id: 'b3rsb4s84',
                    title: "New Title",
                    article: 'New Posted article'
                }
            })
            .expect(200, done);
    });
})

describe('When user makes a PUT request', () => {
    let data = {
        title: "Updated Title",
        article: "Updated Posted Article",
    }

    test("PUT /:id should respond status code 200 and updated Article", done => {
        request(app)
            .put("/b3rsb4s84")
            .type("form")
            .send(data)
            .expect(200, done);
    });

    test("empty PUT /:id should respond status code 400 and error message", done => {
        request(app)
            .put("/b3rsb4s84")
            .type("form")
            .send({ article: '' })
            .expect("Content-Type", /json/)
            .expect({ error: 'Article input empty' })
            .expect(400, done);
    });
})

describe('When user makes a DELETE request', () => {
    test("DELETE /:id should respond status code 200 and updated Article", done => {
        request(app)
            .delete("/b3rsb4s84")
            .expect("Content-Type", /json/)
            .expect({ alert: 'Article deleted' })
            .expect(200, done);
    });

    test("non-existent DELETE /:id should respond status code 404 and error message", done => {
        request(app)
            .delete("/fakeID123")
            .expect("Content-Type", /json/)
            .expect({ error: 'Article not found' })
            .expect(404, done);
    });
})

