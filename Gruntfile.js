module.exports = function(grunt) {

    var DIRDIST = '',
        DIRSOURCE = 'src/',
        DIRLIBS = 'libs/',
        DIRPLUGINS = 'plugins/',
        DIRMODULES = 'modules/';

      // Project configuration.
      grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */',
                separator: ';'
            },
            base: {
                src: [
                    DIRSOURCE + '*.js'
                ],
                dest: DIRDIST + 'app.js'
            }/*,
            jquery: {
                src: [
                    DIRSOURCE + DIRLIBS + 'jquery.js'
                ],
                dest: DIRDIST + DIRLIBS + 'jquery.js'
            },
            json: {
                src: [
                    DIRSOURCE + DIRLIBS + 'json2.js'
                ],
                dest: DIRDIST + DIRLIBS + 'json2.js'
            },
            modernizr: {
                src: [
                    DIRSOURCE + DIRLIBS + 'modernizr.js'
                ],
                dest: DIRDIST + DIRLIBS + 'modernizr.js'
            }*/
        },

        watch: {
            scripts: {
                files: DIRSOURCE + '*.js',
                tasks: ['concat'],
                options: {
                    interrupt: true
                }
            }/*,
            custom: {
                files: ['<%= concat.storage.src %>','<%= concat.engine.src %>'],
                tasks: ['concat:storage', 'concat:engine']
            }*/
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            }
            /*--------------just as an exemple
            map: {
                src: '<%= concat.map.dest %>',
                dest: '<%= concat.map.dest %>'
            }--------------*/
        }

      });

      // Load the plugins.
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-uglify');

      // Build task.
      grunt.registerTask('build', ['concat', 'uglify']);

};