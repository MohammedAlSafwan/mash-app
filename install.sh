#!/bin/bash

# Install the dependencies for the React project
npm i --force

# Build the React project
npm run build

# Run the Docker compose file
docker compose up