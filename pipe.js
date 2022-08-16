const express = require('express');
const CounterReadableStream = require('./CounterReadableStream');
const CollectSizeStream = require('./CollectSizeStream');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const counterReadableStream = new CounterReadableStream();
  const collectSizeStream = new CollectSizeStream();

  counterReadableStream.on('end', () => console.log('end counterStream'));
  counterReadableStream.on('close', () => console.log('close counterStream'));
  counterReadableStream.on('error', (err) => console.error('counterStream', err));

  collectSizeStream.on('end', () => console.log('end collectSizeStream'));
  collectSizeStream.on('close', () => console.log('close collectSizeStream'));
  collectSizeStream.on('error', (err) => console.error('collectSizeStream', err));

  res.on('close', () => console.log('close writableStream'));
  res.on('error', (err) => console.error('writableStream', err));

  counterReadableStream.pipe(collectSizeStream).pipe(res);
});

app.listen(port, () => {
  console.log(`Sample app listening on port ${port}.`);
});
