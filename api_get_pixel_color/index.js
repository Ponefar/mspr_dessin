const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const route = require('./src/routes/route');
const cors = require('cors');

app.use(bodyParser.json({limit: '50mb'}));
app.use(
  bodyParser.urlencoded({
    limit:'50mb',
    extended: true,
  })
);

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.json({'message': 'Hey, I\'m Adrien!'});
})

app.use('/api/v1', route);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  
  return;
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening at http://localhost:${port}`)
});
