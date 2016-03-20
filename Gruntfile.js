module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    env:{
        options:{
        },
        dev:{
            NODE_ENV : 'DEVELOPMENT'
        },
        prod:{
            NODE_ENV : 'PRODUCTION'
        }
    },
    preprocess:{
        dev:{
            src : './src/index.html',
            dest : './dev/index.html'
        },
        prod:{
            src : './src/index.html',
            dest : './dist/index.html'
        }
    },
    ngconstant: {
        dev:{
            options: {
                dest: 'dev/js/util/constants.js',
                name: 'constants',
            },
            constants: {
            conf: grunt.file.readJSON('conf/conf-dev.json')
          }
        },
        prod:{
            options: {
                dest: 'dist/js/util/constants.js',
                name: 'constants',
            },
            constants: {
            conf: grunt.file.readJSON('conf/conf.json')
          }
        },
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js','dist/js/util/constants.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    clean:{
        dev:{
            src:['src/tmp', 'dev/tmp']
        },
        prod:{
            src:['dist/js/mirror-mirror.js','dist/js/util/']
        }
    },
    copy: {
        dev:{
            files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['**','!**/*.json'],
                        dest: 'dev/'
                    }
            ]
        },
        prod:{
            files: [
                    {
                        expand: true,
                        cwd: 'node_modules/weather-icons/',
                        src: ['**'],
                        dest: 'dist/lib/weather-icons'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/ical.js/',
                        src: ['build/**'],
                        dest: 'dist/lib/ical.js'
                    },
                    {
                        expand: true,
                        cwd: 'src/font/',
                        src: ['**'],
                        dest: 'dist/font'
                    }
            ]
        }
    },
    karma: {
      unit: {
        options: {
          frameworks: ['jasmine'],
          singleRun: true,
          browsers: ['PhantomJS'],
          files: [
            './node_modules/angular/angular.js',
            './node_modules/angular-mocks.js',
            './node_modules/ical.js/build/ical.js',
            './dev/js/**/*.js'
          ]
        }
      }
    }

});

  grunt.loadNpmTasks('grunt-ng-constant');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('dev',['env:dev','copy:dev','ngconstant:dev','jshint','preprocess:dev']);
  grunt.registerTask('prod',['env:prod','copy:prod','ngconstant:prod','preprocess:prod','jshint','concat', 'uglify','cssmin','clean:prod']);

};
