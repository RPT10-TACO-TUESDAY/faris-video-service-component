const app = require('./app.js');
const port = 3049;


app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});