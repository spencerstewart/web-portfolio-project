module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    /*
    Use GraphicsMagick to optimize image sizes
    */
    responsive_images: {
      dev: {
        options: {
          sizes: [
            {
            width: 1474,
            suffix: '_large_2x',
            quality: 30
            },{
            width: 737,
            suffix: '_large',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /*
    Clear out images directory to replace with every grunt.
    */
    clean: {
      dev: {
        src: ['images']
      }
    },
  });

  // Default task(s).
  grunt.registerTask('default',
   ['clean', 'responsive_images']
 );
};
