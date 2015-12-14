// MUST START 'python -m SimpleHTTPServer' in COMMAND LINE TO OPEN IN BROWSER
// SHOULD BE VISIBLE AT LOCALHOST:8000

var routerApp = angular.module('jetPath', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '../views/home.html'
        })
        
        .state('jobs', {
            url: '/jobs',
            templateUrl: '../views/jobs.html'
        })

        .state('login', {
            url: '/login',
            templateUrl: '../views/login.html',
            controller: 'loginCtrl'
        })

        .state('post', {
            url: '/login/post',
            templateUrl: '../views/post.html',
            controller: 'postCtrl'
        });
        
});