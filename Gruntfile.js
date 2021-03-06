/*!
 * Gruntfile.js
 * 
 * Copyright (c) 2014
 */

module.exports = function(grunt) {

/* ---------------------------------------------------------------------------
 * config
 * -------------------------------------------------------------------------*/

grunt.initConfig({

  /* -------------------------------------------------------------------------
   * jshint
   * -----------------------------------------------------------------------*/

  jshint: {
    all: [
      'Gruntfile.js',
      'tasks/*.js'
    ],
    options: {
      jshintrc: '.jshintrc',
    }
  },


  /* -------------------------------------------------------------------------
   * clean
   * -----------------------------------------------------------------------*/

  clean: {
    test: ['tmp']
  },


  /* -------------------------------------------------------------------------
   * easy-docs
   * -----------------------------------------------------------------------*/

  easydocs: {
    all: {
      options: {
        'root': './node_modules/easy-docs-bootstrap/preview',
        'src': './src',
        'dest': '../../../tmp',
        'pages': [{
          'fileName': 'index.html',
          'sections': ['getting-started.md', 'easydocs', 'license.md']
        }]
      }
    }
  },


  /* -------------------------------------------------------------------------
   * nodeunit
   * -----------------------------------------------------------------------*/

  nodeunit: {
    tests: ['test/*_test.js']
  }

});


/* ---------------------------------------------------------------------------
 * load/register
 * -------------------------------------------------------------------------*/

// Actually load this plugin's task(s).
grunt.loadTasks('tasks');

// These plugins provide necessary tasks.
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-nodeunit');

// Whenever the "test" task is run, first clean the "tmp" dir, then run this
// plugin's task(s), then test the result.
grunt.registerTask('test', ['clean', 'easydocs', 'nodeunit']);

// By default, lint and run all tests.
grunt.registerTask('default', ['jshint', 'test']);

};