'use strict';

angular.module('paraisoCiclistaApp', [
  'paraisoCiclistaApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .constant("API", "http://localhost:8080/ParaisoCiclistaBackend/api")
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
