#!/bin/sh

rm -r -f dist/lib &&
rm -r -f dist/helpers &&
mkdir -p dist/lib &&
node compileElements.js &&
node compileHelpers.js &&
rm -r -f dist/tmp
