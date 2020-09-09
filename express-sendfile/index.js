const express = require('express');
const app = express();

app.use((req, res, next) => {
  if (req.originalUrl === '/index.html') {
    res.sendFile('/home/dev/lfz/c0720-code-solutions/express-sendfile/index.html');
  } else if (req.originalUrl === '/styles.css') {
    res.sendFile('/home/dev/lfz/c0720-code-solutions/express-sendfile/styles.css');
  } else if (req.originalUrl === '/main.js') {
    res.sendFile('/home/dev/lfz/c0720-code-solutions/express-sendfile/main.js');
  } else {
    next();
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
