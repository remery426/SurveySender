var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain:  'noiasd12369' }, function(err, tunnel) {
  console.log(tunnel)
});
