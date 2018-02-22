'use strict';

function parqueosService(API, $resource){
	return $resource(API + "/parqueo/:codigoFicha",{
		codigoFicha:"@codigoFicha"
	},{
		find:{
			url: API + "/parqueo/find",
			method: "GET",
			isArray: false
		},
		update:{
			method:'PUT'
		}
	});
}

angular.module('paraisoCiclistaApp')
	.factory('parqueosService', parqueosService);