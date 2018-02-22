'use strict';

angular.module('paraisoCiclistaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('retirarParqueo', {
        url: '/retirar-parqueo',
        template: '<retirar-parqueo></retirar-parqueo>'
      });
  });
