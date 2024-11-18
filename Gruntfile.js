module.exports = function (grunt) {
   
    grunt.initConfig({
      less: {
        development: {
          files: {
            'dist/styles.css': 'src/styles.less' 
          }
        }
      },

      uglify: {
        build: {
          files: {
            'dist/scripts.min.js': ['src/scripts.js'] 
          }
        }
      }
    });
  
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['less', 'uglify']);
  };
  