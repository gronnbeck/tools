#!/bin/bash

_ip=`docker-machine ip dev`
_port=7474
_url=http://$_ip:$_port

echo "Opening " $_url "password is: password"

sleep 2

open $_url
