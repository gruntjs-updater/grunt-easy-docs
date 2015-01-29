grunt-easy-docs [![Build Status](https://travis-ci.org/easy-js/grunt-easy-docs.svg)](https://travis-ci.org/easy-js/grunt-easy-docs)
=================

Grunt task to generate API documentation (using easy-docs).


## Getting Started

This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-easy-docs --save-dev
```

Once the plsgin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```
grunt.loadNpmTasks('grunt-easy-docs');
```


## The "easydocs" task

### Overview

In your project's Gruntfile, add a section named `easydocs` to the data object passed into `grunt.initConfig()`.

```
grunt.initConfig({
  easydocs: {
    options: {
      // Task-specific options go here.
    },
    target: {
      // Target-specific options go here.
    }
  }
});
```

### Options

#### options.baseDir
Common AMD baseDir property.

Type: `String`

default: `process.cwd()`


### Usage Examples

```
grunt.initConfig({
  nodefy: {
    options: {
      'baseDir': 'src',
      'paths': { 'foo': 'foo/bar' }
    },
    all: {}
  }
});
```


## License

The MIT License (MIT) Copyright (c) 2014 First Opinion

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.