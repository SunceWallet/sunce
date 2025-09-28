#!/bin/bash

PLATFORM="$1"

# For CI environment, use environment variables directly
export CSC_LINK
export CSC_KEY_PASSWORD

if [ "$PLATFORM" = "mac" ]; then
  export APPLE_ID
  export APPLE_ID_PASSWORD
fi
