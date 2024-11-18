
  

# Calculator

Application for calculating mathematical expressions

# How to start?

## Environment Variables

To run this project, you will need to add the following environment variables to /env directory and create a env file with the enviroment, in this case I think prod is the best approach. Then it is necessary to add a file in the /env directory called .env.production, so you should finally have a file /env/env.production with the environment variable PORT

example:

 `PORT=8010`
## Run Locally

Install dependencies

```bash

npm install

```

Start the server

```bash

npm run start
```
## API Reference

#### Calculate Expression

```http

POST /calculator

```
POST body example 
``
{
"expression":"10 * (2 + 5) / 2"
}
``


## Tech Stack
**Server:** Node, Express
**Node Version:** v20.16.0



## Running Tests

To run tests, run the following command

```bash
  npm run test
```

