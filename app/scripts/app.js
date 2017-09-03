'use strict';

angular.module('efficiChatWeb', ['ui.router','ngResource','ngDialog', 'tooltips'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl: 'views/navbar.html',
                        controller: 'NavbarController'
                    },
                 
                    'content': {
                        templateUrl: 'views/home.html',
                        controller: 'CompanyController'
                    }
                    
                }
            })

            .state('app.department1Messages', {
                url: 'department1Messages',
                views: {
                    'content@': {
                        templateUrl: 'views/department1Messages.html',
                        controller: 'CompanyController'
                    }
                }
            })

            .state('app.department2Messages', {
                url: 'department2Messages',
                views: {
                    'content@': {
                        templateUrl: 'views/department2Messages.html',
                        controller: 'CompanyController'
                    }
                }
            })

            .state('app.department3Messages', {
                url: 'department3Messages',
                views: {
                    'content@': {
                        templateUrl: 'views/department3Messages.html',
                        controller: 'CompanyController'
                    }
                }
            })

            .state('app.projectAMessages', {
                url: 'projectAMessages',
                views: {
                    'content@': {
                        templateUrl: 'views/projectAMessages.html',
                        controller: 'CompanyController'
                    }
                }
            })

            .state('app.projectBMessages', {
                url: 'projectBMessages',
                views: {
                    'content@': {
                        templateUrl: 'views/projectBMessages.html',
                        controller: 'CompanyController'
                    }
                }
            })

            .state('app.projectCMessages', {
                url: 'projectCMessages',
                views: {
                    'content@': {
                        templateUrl: 'views/projectCMessages.html',
                        controller: 'CompanyController'
                    }
                }
            });

            $urlRouterProvider.otherwise('/');
    })
;
