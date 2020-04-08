# Steps
  1. npm install
  2. npm run test

# About
This repo is a reproduction of next vue-server-renderer bug:

When i use component with inheritAttrs: false, which use another component on top level of "template" section or render function, vue-server-renderer still adds html attributes on html element.
