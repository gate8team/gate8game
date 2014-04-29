module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: ['static/js/game/models/person.js',
                    'static/js/game/models/hero.js',
                    'static/js/libs/*.js',
                    'static/js/game/game.js',
                    'static/js/main.js'],
                dest: 'static/js/build/gate8team.min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};