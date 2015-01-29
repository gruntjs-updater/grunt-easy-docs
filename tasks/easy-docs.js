/*!
 * easy-docs.js
 * 
 * Copyright (c) 2014
 */

// 3rd party
var Easydocs = require('easy-docs');
var theme    = require('easy-docs-bootstrap');


/* -----------------------------------------------------------------------------
 * task
 * ---------------------------------------------------------------------------*/

var name = 'easydocs';
var description = 'Generate API documentation.';


/* -----------------------------------------------------------------------------
 * task
 * ---------------------------------------------------------------------------*/

module.exports = function(grunt) {

  grunt.registerMultiTask(name, description, function () {
    // async... as always (this should be a default)
    var done = this.async();

    // options/defaults
    var options = this.options({
      theme: theme
    });

    var easydocs = new Easydocs(options);
    easydocs.generate(done);
  });

};