'use strict';

const express = require('express');
const volleyball = require('volleyball');
const { resolve } = require('path');

const app = express();

// logging middleware
app.use(volleyball);

// serve static files from public and for basscss
app.use('/public', express.static(resolve(__dirname, 'public')));
app.use('/basscss', express.static(resolve(__dirname, 'node_modules/basscss')));

// request any page and receive index.html
app.get('/*', (req, res) => res.sendFile(resolve(__dirname, 'index.html')));

const PORT = process.env.PORT || 3000;

// server listening!
app.listen(PORT, () => {
  console.log(`Rocking out on port ${PORT}`);
});
