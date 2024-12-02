## Project setup

1. Clone the repository:

```bash
$ git clone https://github.com/kevinjlope/calculator.git
$ cd calculator
```

2. Check if Node.js is installed:

```bash
$ node -v
```

If Node.js is not installed, download and install it from [here](https://nodejs.org/).
This project use Node.js v20.9.0

3. Install the packages

```bash
$ npm install
```

## Run the project

```bash
$ npm run start:dev
```

## Test the Rest API

After run the command

```bash
$ npm run start:dev
```

The application run for default in the port 3000.
You can use anything client to test the API, postman, thunder client, etc. But this project integrated swagger and if your prefer you can use it.
In your preferrer browser paste: http://localhost:3000/api .

<img src="https://i.imgur.com/NzQccJ2.png" alt="swagger" />

In case you don't prefer use swagger in your client(postman, thunder client) paste the next url: http://localhost:3000/math-expression, select the method POST and paste the next body:

```json
{ "expression": "10 * (2 + 5) * 10" }
```

## Run tests

```bash
# unit tests
$ npm run test
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
