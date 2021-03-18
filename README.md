# Node.js server with a database and mocha on Docker container

# 1. How to run this application

### docker-compose up

Running:

```
docker-compose up
```


1. express server itself (internally port `8080`) forwarded to port `8080` on the host machine
2. Postgres database (internally `5432`), forwarded to port `2345`


### 2. stop the application

### docker-compose down

# 3 Testing

## Testing with docker-compose

Running

```
npm run test
```

will spin up a [Postgres](https://www.postgresql.org) database (internally port `5432`), port-forwarded to port `2345` on the host machine.

It will then run all the tests with `mocha` as a test runner and then destroy the containers afterwards.