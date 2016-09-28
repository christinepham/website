(function() {
  'use strict';
  angular.module('xtiney', ['ngRoute'])
  .config([
    '$routeProvider', function($routeProvider) {
      $routeProvider.when('/home', {
      	templateUrl: 'content/home.html'
      }).when('/blog', {
        templateUrl: 'content/blog.html'
      }).when('/travel', {
        templateUrl: 'content/travel.html',
        controller: 'travel'
      }).when('/resume', {
        templateUrl: 'content/resume.html'
      }).when('/contact', {
        templateUrl: 'content/contact.html'
      }).when('/programming', {
        templateUrl: 'content/resume/programming.html'
      }).when('/teaching', {
        templateUrl: 'content/resume/teaching.html'
      }).when('/projects', {
        templateUrl: 'content/resume/projects.html'
      }).when('/skills', {
        templateUrl: 'content/resume/skills.html'
      }).when('/leadership', {
        templateUrl: 'content/resume/leadership.html'
      }).otherwise({
				redirectTo: '/home'
      });
    }
  ]);
}).call(this);