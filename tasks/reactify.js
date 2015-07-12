/*
 * grunt-reactify
 * 
 *
 * Copyright (c) 2015 Aymen Mouelhi
 * Licensed under the MIT license.
 */

'use strict';

var browserify = require("browserify");

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('reactify', 'Grunt plugin to render react components', function () {

        var source = this.data;
        var destination = this.target;
        var done = this.async();
        var responses = 0;

        // Get all files of specified source folder
        grunt.file.expand({filter: 'isFile'}, source).forEach(function (path, index, arr) {
            // total number of files
            grunt.log.writeln("Number of JSX files: " + arr.length);

            // Read path
            grunt.log.writeln("Reading file: " + path);

            if (!grunt.file.exists(path)) {
                grunt.log.error('Source file "' + path + '" not found.');
                done('Source file "' + path + '" not found.');
            }else{
                // Create new browserify instance
                var b = browserify();
                // Add file
                b.add(path);

                // Reactify it
                b.transform('reactify');

                b.bundle(function (err, buf) {
                    if (err) {
                        grunt.log.error('file "' + path + '" couldn\'t be browserified .' + err);
                        done(err);
                    }

                    // Get destination file path
                    var fileName = path.substring(path.lastIndexOf('/'), path.length).replace('jsx', 'js');
                    var dest = destination + path.substring(path.indexOf('/'), path.lastIndexOf('/')) + fileName;
                    grunt.log.ok('File "' + dest + '" created.');

                    // Write file to destination
                    grunt.file.write(dest, buf);

                    responses++;
                });

                if(responses === arr.length){
                    done();
                }
            }
        });

    });
};

