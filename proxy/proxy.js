#!/usr/bin/env node

var http = require('http')
    , httpProxy = require('http-proxy')
    , commander = require('commander')

commander
  .version('0.0.1')
  .option('-g, --guest [host]', 'Guest IP')
  .option('-p, --port [port]', 'Guest Port')
  .option('-l, --listen [port]', 'Host should listen on. Defaults to 8002')
  .parse(process.argv)

if (commander.guest == null) {
  console.log('Missing host. Exiting.')
  return;
}

var proxy = new httpProxy.RoutingProxy();

console.log('creating proxy server')
http.createServer(function (request, response) {
	proxy.proxyRequest(request, response, {
		host: commander.guest,
		port: commander.port || 80
	});
}).listen(commander.listen || 8002);
