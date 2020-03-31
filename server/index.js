const server = require('./src/server');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening to requests on http://localhost:${PORT}`);
});
