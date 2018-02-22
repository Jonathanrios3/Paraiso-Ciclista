'use strict';

(function() {

class RetirarParqueoController {

  constructor(parqueosService) {
    this.parqueosService = parqueosService;
    this.totalPagar = undefined;
  }

  $onInit() {
    
  }

  consultar(codigo){
    this.parqueosService.find({codigo: codigo}).$promise
    .then(response =>{
      this.parqueo = response;
      this.calcularPrecio(response);
    })
  }

  calcularPrecio(parqueo){
    if(parqueo.horas <= 3){
      this.totalPagar = parqueo.horas * 2;
    }else{
      this.totalPagar = 3 * 2;
      this.totalPagar += (parqueo.horas - 3) * 1.5;
      if(parqueo.horas > 5){
        this.totalPagar -= this.totalPagar * 0.05;
      }
    }

    console.log(this.totalPagar);
  }

}

angular.module('paraisoCiclistaApp')
  .component('retirarParqueo', {
    templateUrl: 'app/parqueos/retirar-parqueo/retirar-parqueo.html',
    controller: RetirarParqueoController,
    controllerAs: 'vm'
  });

})();

