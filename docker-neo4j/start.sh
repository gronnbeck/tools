#!/bin/bash

docker-machine start dev
eval $(docker-machine env dev)

docker run \
-e "NEO4J_AUTH=neo4j/password" \
-p 7474:7474 \
-p 7687:7687 \
neo4j
