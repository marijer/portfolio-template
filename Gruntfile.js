module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },

      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

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

    cssmin: {   // minifies css
      minify: {
        expand: true,
        cwd: 'public/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'public/css/',
        ext: '.min.css'
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

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('watch2', ['watch']);
  grunt.registerTask('min', ['cssmin']);


  grunt.registerTask('hint', ['jshint']);
};