/*
 * Breach: [mod_test] index.js
 *
 * Copyright (c) 2014, Stanislas Polu. All rights reserved.
 *
 * @author: spolu
 *
 * @log:
 * - 2014-06-26 spolu   Creation
 */
"use strict"

var breach = require('breach_module');

breach.init(function() {
  breach.expose('init', function(src, args, cb_) {
    console.log('Initialization');
    return cb_();
  });

  breach.expose('kill', function(args, cb_) {
    common.exit(0);
  });
});

process.on('uncaughtException', function (err) {
  common.fatal(err);
});