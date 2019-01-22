const app = require('./app.js');
const port = process.env.PORT || 3049;


app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});