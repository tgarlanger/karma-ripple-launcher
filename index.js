/*
 * Based on karma-ripple-launcher
 */
require('ripple-emulator');
var exec = require('child-process-promise').exec;

var RippleBrowser = function(baseBrowserDecorator, config, args) {
  'use strict';

  baseBrowserDecorator(this);

  var flags = args.flags || [];

  var self = this;

  self.settings = config.rippleSettings;

  console.log('Starting ripple in: ' + config.rippleSettings.codePath);

  exec('ripple elmulate --path ' + config.rippleSettings.codePath);

};

RippleBrowser.prototype = {
  name: 'Ripple',

  DEFAULT_CMD: {
    linux: 'ripple',
    darwin: 'ripple',
    win32: 'ripple' // Will not work, need to address later
  },
  ENV_CMD: 'RIPPLE_BIN'
};

RippleBrowser.$inject = ['baseBrowserDecorator', 'config', 'args'];

// PUBLISH DI MODULE
module.exports = {
  'launcher:Ripple': ['type', RippleBrowser],
};
