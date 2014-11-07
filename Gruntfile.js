'use strict';

var
    LIVERELOAD_PORT = 35729,
    lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT}),
    mountFolder = function (connect, dir) {
        return connect.static(require('path').resolve(dir));
    };

module.exports = function (grunt) {
    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-nodemailer');

    grunt.initConfig({
        nodemailer: {
            options: {
              transport: {
                type: 'SMTP',
                options: {
                  service: 'Gmail',
                  auth: {
                    user: 'faandrade@gmail.com',
                    pass: 'keikothewhale'
                  }
                }
              },
              message: {
                subject: 'A test e-mail',
                text: 'Plain text message',
                html: '<body><h1>HTML custom message</h1></body>',
              },
              recipients: [
                {
                  email: 'faandrade@gmail.com',
                  name: 'Freddie Andrade'
                }
              ]
            }
        },
        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: /templates\//
                },
                files: {
                  "js/scripts/templates.js": "**/*.handlebars"
                }
            }
        },
        stylus: {
            compile: {
                options: {
                    paths: ['stylus/'],
                    import: ['../variables']
                },
                files: {
                    'css/style.css' : 'css/stylus/*.styl',
                }
            }
        },
        watch: {
            files: [
                'index.html',
                'js/**/*.js'
            ],
            ember_templates: {
                files: 'templates/**/*.handlebars',
                tasks: ['emberTemplates']
            },
            stylus: {
                files: ['css/stylus/*.styl'],
                tasks: ['stylus']
            },
            livereload: {
                options: { livereload: LIVERELOAD_PORT },
                files: ['css/style.css', 'index.html', 'js/**/*.js']
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function( connect ) {
                        return [
                            lrSnippet,
                            mountFolder(connect, './')
                        ];
                    }
                }
            }
        }
    });

    grunt.registerTask('server', function() {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('default', [
        'stylus',
        'emberTemplates',
        'server'
    ]);
};
