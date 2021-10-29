const request = require("supertest");
const app = require('../app');

describe('When user makes a POST request', () => {
    it.todo("POST '/' should respond status code 200 and new Article")
    it.todo("empty POST '/' should respond status code 400 and error message")
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

