// Gruntfile.js
module.exports = function(grunt) {

    // Project config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src : [
                    'bower_components/jquery/jquery.min.js',
                    'bower_components/jquery-ui/jquery-ui.min.js',
                    'bower_components/moment/moment.js',
                    'bower_components/moment/locale/ko.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js',
                    'bower_components/bootstrap-datepicker/js/locales/bootstrap-datepicker.kr.js',
                    'bower_components/bootstrap-timepicker/js/bootstrap-timepicker.js',
                    'bower_components/seiyria-bootstrap-slider/js/bootstrap-slider.js',
                    'bower_components/fullcalendar/dist/fullcalendar.js',
                    'bower_components/fullcalendar/dist/lang-all.js',
                    'bower_components/chartjs/Chart.min.js',
                    'js/app.js'
                ],
                dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/<%= pkg.name %>-<%= pkg.version %>.min.js': ['dist/<%= pkg.name %>-<%= pkg.version %>.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false
            },
            target: {
                files: {
                    'dist/<%= pkg.name %>-<%= pkg.version %>.min.css':
                        [
                            'bower_components/bootstrap/dist/css/bootstrap.css',
                            'bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css',
                            'bower_components/bootstrap-timepicker/css/bootstrap-timepicker.css',
                            'bower_components/seiyria-bootstrap-slider/dist/css/bootstrap-slider.css',
                            'bower_components/fullcalendar/dist/fullcalendar.css',
                            'css/nanumgothic.css',
                            'css/AdminLTE.css',
                            'css/skins/_all-skins.css'
                        ]
                }
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Register Task
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};