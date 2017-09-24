#!/bin/bash

_volume=$1

if [ -z "$_volume" ]; then
  _use_volume=false
fi

docker-machine start dev
eval $(docker-machine env dev)

if [ "$_use_volume" = false ]; then
  docker run \
  -e "NEO4J_AUTH=neo4j/password" \
  -p 7474:7474 \
  -p 7687:7687 \
  neo4j
else
  docker run \
  -v $_volume:/var/lib/neo4j/import \
  -e "NEO4J_AUTH=neo4j/password" \
  -p 7474:7474 \
  -p 7687:7687 \
  neo4j
fi
