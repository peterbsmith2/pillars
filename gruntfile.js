module.exports = function(grunt){
  //Configure task(s)
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat:{
      devcss:{
        src: ['src/css/*.css'],
        dest: 'dev/css/main.min.css'
      },
      buildcss:{
        src: ['src/css/*.css'],
        dest: 'build/css/main.min.css'
      },
    },
    cssmin:{
      devcss:{
        src: ['dev/css/main.min.css'],
        dest: 'dev/css/main.min.css'
      },
      buildcss:{
        src: ['build/css/main.min.css'],
        dest: 'build/css/main.min.css'
      }
    },
    uglify: {
      build: {
        files:[
          {src: ['src/js/functions.js','src/js/*.js'], dest: 'build/js/script.min.js'},
        ]
      },
      dev: {
        options: {
          beautify: true,
          mangle: false,
          compress: false,
          preserveComments: 'all'
        },
        src: ['src/js/functions.js','src/js/*.js'],
        dest: 'dev/js/script.min.js'
      }
    },
    copy: {
      dev: {
        files: [
          {expand: true, cwd:'src/', src: ['fonts/*','db/*','*.html','css/*.gif','*.php'], dest: 'dev/'},
        ],
      },
      build: {
        files: [
          {expand: true, cwd:'src/', src: ['fonts/*','db/*','*.html','css/*.gif','*.php'], dest:'build/'}
        ]
      }
    },
    watch: {
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify:dev'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['src/css/*.css'],
        tasks: ['concat:devcss'],
        options: {
          livereload: true,
        }
      },
      other: {
        files: ['fonts/*','db/*','*.html','css/*.gif','*.php'],
        tasks: ['copy:dev'],
        options: {
          cwd: {files: 'src/'},
          livereload: true
        }
      }
    },
    express:{
      all:{
        options:{
          port:9000,
          hostname:'localhost',
          bases: ['dev/'],
          livereload: true
        }
      }
    }
  });

  //Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-express');

  //Register task(s)
  grunt.registerTask('default', ['uglify:dev','concat:devcss','copy:dev']);
  grunt.registerTask('build', ['uglify:build','concat:buildcss','cssmin:buildcss','copy:build']);
  grunt.registerTask('server', ['express','watch']);
};
