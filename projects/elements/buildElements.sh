#!/bin/sh

rm -r -f dist/ &&
mkdir -p dist/lib &&
node compileElements.js &&
node compileHelpers.js &&
rm -r -f dist/tmp
