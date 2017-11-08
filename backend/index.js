const express = require('express');
const app = express();

app.use(express.static('backend/view', {
  extensions: ['html', 'js', 'css'],
  index: 'index.html',
}));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
