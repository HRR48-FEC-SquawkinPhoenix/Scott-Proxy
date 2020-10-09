module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options : {
        seperator: ';',
      },
      dist: {
        src: ['Add-To-Cart/Dist/bundle.js', 'ImageCarousel/public/bundle.js', 'Reviews/public/bundle.js', 'Seller/client/dist/bundle.js'],
        dest: 'dist/built.js'
      }
    },

    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'output.css': ['Seller/client/dist/style.css', 'Proxy/Public/styles.css']
        }
      }
    }      
  })

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin')

  grunt.registerTask('default', ['cssmin', 'concat']);
  


}