module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-manifest');

  return {
    generate: {
      options: {
        basePath: 'dist',
        network: ['http://*', 'https://*'],
        preferOnline: true,
        verbose: true,
        timestamp: true,
        hash: true,
        master: ['index.html']
      },
      src: [
          'assets/*.min.js',
          'assets/*.min.css'
      ],
      dest: 'dist/manifest.cache'
    }
  };
};
