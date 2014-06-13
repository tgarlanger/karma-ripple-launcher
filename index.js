/*
 * Based on karma-ripple-launcher
 */
//var fs = require('fs');

var Ripple = function(baseBrowserDecorator, config) {
  'use strict';

  var self = this;

  console.log('stdout: starting ripple Launcher');

  self.settings = config.rippleSettings;

  baseBrowserDecorator(this);
};

Ripple.prototype = {
  name: 'Ripple',

  DEFAULT_CMD: {
    linux: require('ripple emulate').path,
    darwin: require('ripple emulate').path,
    win32: 'ripple emulate' // Will not work, need to address later
  },
  ENV_CMD: 'RIPPLE_BIN'
};

Ripple.$inject = ['baseBrowserDecorator', 'config'];

// PUBLISH DI MODULE
module.exports = {
  'launcher:Ripple': ['type', Ripple],
};
