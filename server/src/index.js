const app = require('./app');

const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
