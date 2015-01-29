/*!
 * test/easy-docs_test.js
 * 
 * Copyright (c) 2014
 */

// 3rd party
var grunt = require('grunt');


/* -----------------------------------------------------------------------------
 * expected
 * ---------------------------------------------------------------------------*/

var expected = grunt.file.read('node_modules/easy-docs-bootstrap/preview/docs/index.html');


/* -----------------------------------------------------------------------------
 * test
 * ---------------------------------------------------------------------------*/

exports.easydocs = {

  all: function(test) {
    var result = grunt.file.read('tmp/index.html');

    test.expect(1);
    test.equal(result, expected);
    test.done();
  }

};
