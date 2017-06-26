var tenon = require('tenon-api-client');
var axios = require('axios');
const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

axios.get('http://localhost.test').then((doc) => {
  fs.writeFileSync('test.html', doc.data);
  console.log(path.join(process.env.PWD, 'test/access/test.html'));
  const data = querystring.stringify({
    src: doc.data, //path.join(process.env.PWD, 'test/access/test.html'),
    key: 'fce82cf97a69ec90125828d9e7bf2cff'
  });

  axios({
    url: 'https://tenon.io/api/',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(data)
    }
  }).then(console.log)
  .catch(console.log);
}).catch(console.log);
