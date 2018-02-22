'use strict';

(function() {

class ParqueosListController {

  constructor(parqueosService) {
  	this.parqueosService = parqueosService;
  }

  $onInit() {
    this.traerParqueos();
  }

  traerParqueos(){
  	this.parqueosService.query().$promise
  		.then(response =>{
  			this.parqueos = response;
  			for (var i = 0; i < this.parqueos.length; i++) {
          this.parqueos[i] = this.calcular(this.parqueos[i]);
        }
  		})
  }

  calcular(parqueo){
  	if(parqueo.horas <= 3){
      parqueo.precio = parqueo.horas * 2;
    }else{
      parqueo.precio = 3 * 2;
      parqueo.precio += (parqueo.horas - 3) * 1.5;
      if(parqueo.horas > 5){
        parqueo.precio -= parqueo.precio * 0.05;
      }
    }

    parqueo.estado = !parqueo.estado;
    console.log('despues de editar ', parqueo);
    return parqueo;
    /*this.parqueosService.update(parqueo).$promise
    	.then(response =>{
    		this.parqueos[this.parqueos.indexOf(parqueo)] = parqueo
      })*/
    	
   
  }

  guardar(parqueo){
    this.parqueosService.update(parqueo)
      .$promise.then(response =>{
        console.log('Se actualizo este item ', parqueo);
      })
  }
}

angular.module('paraisoCiclistaApp')
  .component('parqueosList', {
    templateUrl: 'app/parqueos/parqueos-list/parqueos-list.html',
    controller: ParqueosListController,
    controllerAs: 'vm'
  });

})();
