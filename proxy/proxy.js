#!/usr/bin/env node

var http = require('http')
    , httpProxy = require('http-proxy')
    , commander = require('commander')

commander
  .version('0.0.1')
  .option('-h, --host [type]', 'Host IP')
  .parse(process.argv)

if (commander.host == null) {
  console.log('Missing host. Exiting.')
  return;
}

var proxy = new httpProxy.RoutingProxy();

console.log('creating proxy server')
http.createServer(function (request, response) {
	proxy.proxyRequest(request, response, {
		host: commander.host,
		port: 80
	});
}).listen(8002);
