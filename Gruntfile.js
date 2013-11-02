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

   watch: {
      options: {
        dateFormat: function(time) {
        grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
        grunt.log.writeln('Waiting for more changes...');
      },
    },
  
    scripts: {
      files: 'public/*.js'
      //tasks: 'jshint',
    },
  },


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};