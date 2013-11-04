module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'app.js'],
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

    copy: {
          main: {
            files: [
             { expand: true, flatten: true, src: ['bower_components/jquery/jquery.min.js'], dest: 'public/js/'},
             { expand: true, flatten: true, src: ['bower_components/font-awesome/css/font-awesome.min.css'], dest: 'public/css/'},
             { expand: true, flatten: true, src: ['bower_components/font-awesome/fonts/**'], dest: 'public/fonts/'}
            ]
          }
    },

    cssmin: {   // minifies css
      minify: {
        expand: true,
        cwd: 'public/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'public/css/',
        ext: '.min.css'
      }
    },

    uglify: {
        build: {
            files: {
                'public/js/main.min.js': ['public/js/main.js']
            }
        }
    },    

   watch: {
      options: {
        livereload: true,
      },
      files: ['views/*'],
      tasks: [''],
    }

  });

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['cssmin', 'uglify', 'copy']);
  grunt.registerTask('watch2', ['watch']);

  grunt.registerTask('hint', ['jshint']);
};