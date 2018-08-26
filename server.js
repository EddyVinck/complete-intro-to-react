/* eslint no-console:0 */
require('babel-register');

const express = require('express');
const React = require('react');
const ReactDomServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');
const compression = require('compression');
const App = require('./js/App').default;

const StaticRouter = ReactRouter.StaticRouter;
const port = 3000;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);

const server = express();

server.use(compression());
server.use('/public', express.static('./public'));

server.use((req, res) => {
  console.log(req.url);
  const context = {};
  const body = ReactDomServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App))
  );

  // Redirect users if necessary
  if (context.url) {
    res.redirect(301, context.url);
  }

  // otherwise, render React
  res.write(template({ body }));
  res.end();
});

console.log(`Listening on ${port}`);

server.listen(port);
