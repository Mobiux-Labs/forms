#!/bin/bash

# Reminder: Make this script executable by running the following command:
# chmod +x build-and-move.sh

# Run the build command
npx nx run docs:build

# Check if the build was successful
if [ $? -eq 0 ]; then
  echo "Build successful, moving files..."

  # Remove the existing /docs directory if it exists
  rm -rf ./docs

  # Create a new /docs directory
  mkdir ./docs

  # Move the built files to the /docs directory
  mv ./apps/docs/build/* ./docs/

  echo "Files moved to /docs directory."
else
  echo "Build failed, please check the errors above."
  exit 1
fi