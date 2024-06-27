const http = require('http');




const server = http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/plain'});




  if (req.url === '/') {

    res.end('My home page!');

  } else if (req.url === '/about') {

    res.end('My about page!');

  } else {

    res.end('Page not found!');

  }

});




// Listen on port 3000

server.listen(3000, () => {

  console.log('Server is running on http://localhost:3000/');

});