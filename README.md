# FIG

Fig Finance

## API Documentation

The full API documentation can be found by following the link below:

[link](http://localhost:3000/api/v1/docs/)

## Requirements and Installation

**Via Cloning The Repository**

```bash
# Clone the app
git clone https://github.com/vic3king/FIG.git

# Switch to directory
cd FIG

# Install Package dependencies
npm install

# create a .env file and make a clone of the .example.env
touch .env

#Start the application
npm run start:dev

#View the application
navigate to localhost:3000 to view the application
```

## Testing

```bash
npm run test
```

## Technologies

### Backend

- [NodeJS](http://nodejs.org/en) is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [Express JS](http://express.com) A minimalist web framework
- [MongoDB](https://www.mongodb.com/) The database for modern applications.
- [MongooseORM](https://mongoosejs.com/) Elegant mongodb object modeling for node.js
- [Jest](https://jestjs.io/) Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [Supertest](https://www.npmjs.com/package/supertest) SuperAgent driven library for testing HTTP servers

#### Linter(s)

- [ESLint](eslint.org) provides a pluggable linting utility for JavaScript.
- [Prettier](https://prettier.io) Prettier is an opinionated code formatter with support for Javascript

### Style Guide

- [Airbnb](https://github.com/airbnb/javascript) - Airbnb maintains a very popular JavaScript Style Guide

#### Compiler

- [Babel](https://babeljs.io/) A JavaScript compiler for converting codes written in ES6 or JSX to ES5 that is supported by many browsers

## API Endpoints
<table>
  <tr>
      <th>Request</th>
      <th>End Point</th>
      <th>Action</th>
  </tr>
    <tr>
      <td>POST</td>
      <td>/</td>
      <td>Welcome screen</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/v1/auth/login/</td>
    <td>Login a user</td>
  </tr>
   <tr>
    <td>POST</td>
    <td>/v1/auth/register/</td>
    <td>Register a user</td>
  </tr>
  <tr>
    <td>PATCH</td>
    <td>/v1/users/interests/</td>
    <td>updates a users interests</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/v1/events/create/</td>
    <td>Create a new event</td>
  </tr>
   <tr>
    <td>GET</td>
    <td>/v1/events</td>
    <td>Get all events</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/v1/events/recommended</td>
    <td>Gets a users recommended events based on the users interests</td>
  </tr>

</table>

## Authors

- **Akaniru Victory** - _Initial work_ - [Vic3King](www.vic3king.io)

