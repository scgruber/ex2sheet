module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['react'],
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/jsx/',
          src: '**/*.jsx',
          dest: 'dist/js/',
          ext: '.js',
        }],
      },
    },
    browserify: {
      dist: {
        files: {
          'dist/sheet.js': 'dist/js/app.js',
        }
      }
    },
    concurrent: {
      server: ['watch', 'connect'],
      build: [['babel', 'browserify'], 'pug', 'sass']
    },
    connect: {
      server: {
        options: {
          port: 7997,
          base: 'dist',
          keepalive: true,
        },
      },
    },
    pug: {
      dist: {
        options: {
          pretty: true,
        },
        files: {
          'dist/sheet.html': 'src/sheet.pug',
        },
      },
    },
    sass: {
      dist: {
        options: {
          style: 'expanded',
        },
        files: {
          'dist/sheet.css': 'src/scss/sheet.scss',
        },
      },
    },
    watch: {
      jsx: {
        files: ['src/jsx/**/*.jsx'],
        tasks: ['babel','browserify'],
      },
      pug: {
        files: ['src/**/*.pug'],
        tasks: ['pug'],
      },
      scss: {
        files: ['src/**/*.scss'],
        tasks: ['sass'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concurrent:build', 'concurrent:server'])
};