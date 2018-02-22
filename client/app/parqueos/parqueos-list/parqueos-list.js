'use strict';

angular.module('paraisoCiclistaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('parqueosList', {
        url: '/parqueos-list',
        template: '<parqueos-list></parqueos-list>'
      });
  });
