module.exports = function(grunt) {
    // загрузка плагинов
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec',
    ].forEach(function(task) {
        grunt.loadNpmTasks(task);
    });

    // настройка плагинов
    grunt.initConfig({
        cafemocha: {
            all: {src: 'qa/tests-*.js', option: {ui: 'tdd'}}
        },
        jshint: {
            app: ['meadowlark.js', 'public/js/**/*.js', 'lib/**/*.js'],
            qa: ['Guntfile.js', 'public/js/**/*.js', 'lib/**/*.js']
        },
        exec: {
            linkchecker: {cmd: 'linkcheker http://localhost:3000'}
        }
    });

    // регистрация задания
    grunt.registerTask('default', ['cafemocha', 'jshint', 'exec']);
};