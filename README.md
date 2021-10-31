# CRUD API
CRUD-API is a simple API which serves GET, POST, PUT & DELETE requests to and from an in-memory database. The application utilizes NodeJS with ExpressJS, lowdb & Jest/Supertest.

## Front-end
Link to front-end application: [CRUD-Client](https://github.com/Yasin2201/crud-client)

## Table of contents:
- **[Technologies](#technologies)**
- **[Choices](#choices)**
- **[Unfamiliarities](#unfamiliarities)**
- **[Installation](#installation)**

## Technologies
- NodeJS w/ ExpressJS
- lowdb
- Jest/Supertest

## Choices
The choices made to create this API depended upon requirements and familiarity:

- [NodeJS/ExpressJS] - I chose to use NodeJS due to the fact that I was most familiar with the runtime environment in order to produce a back-end utilising JavaScript. Ontop of this I used the framework ExpressJS in order to make API production and organisation more simple.

- [lowdb] - I decided on lowdb for my in-memory database for multiple reasons. lowdb is still regularly maintained and popular so support and documentation made it easy to learn. It also is primarily compantible with JavaScript making it a appropriate match for my skillset.

- [Jest/Supertest] - I used Jest with the Supertest module in order to test the APIs routes and controllers. Reasoning for this was primarily prior exposure to Jest and also it being on of the most popular testing frameworks for JavaScript.

## Unfamiliarities
During the development of the API I had to expose myself to a couple unfamilliar technologies and methods:
- [lowdb] - Having never used an in-memory database the concept was new to me. My approach in dealing with this was initially familliarising myself with the concept of in-memory databases and then familiarising myself with the documentation provided by my chosen database. 

- [Supertest] - Testing an API was also a new concept. Although previously I had been exposed to testing and TDD in JavaScript I had never explictily tested any APIs. Luckily my previous experience was transferable and I was only required to look through documentation in order to familiarise myself with syntax if Supertest and to also see what aspects of the API I could in this instance it was the Routes and Controllers.

## Installation

CRUD-API requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
cd crud-api
npm i
node index
```
