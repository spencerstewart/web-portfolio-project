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
            width: 1440,
            suffix: '-large_2x',
            quality: 30
            },{
            width: 720,
            suffix: '-large',
            quality: 30
            },{
            name: '440',
            width: 440,
            height: 293,
            suffix: '-medium',
            aspectRatio: false,
            gravity: 'North',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'assets/images/'
        }]
      }
    },

    /*
    Clear out images directory to replace with every grunt.
    */
    clean: {
      dev: {
        src: ['assets/images']
      }
    },
  });

  // Default task(s).
  grunt.registerTask('default',
   ['clean', 'responsive_images']
 );
};
