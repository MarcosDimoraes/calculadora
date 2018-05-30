angular.module('saudeApp',[])
.controller('appCtrl',function($scope){
	var factor=[13.55,13.57, 13.55, 9.65,9.04,7.93,7.69,6.73,6.76,5.48];
	$scope.installment=[];
	$scope.user={resultado:0};
	var resultado = $scope.user.resultado;
	var installment = $scope.installment
	installment[0]={year:2017,value:0.0};
	installment[1]={year:2016,value:0.0};
	$scope.more = function(){
		if (installment.length>9) return;
		installment.push({year:installment[installment.length-1].year-1,value:0});
	}
	$scope.less = function(){
		if (installment.length<3)return;
		installment.pop();
	}
	$scope.operadoras=['Bradesco', 'SulAmerica', 'Operadora A', 'Operadora B'];
	$scope.calcular = function(){
		resultado = 0;
		var i = installment.length-1;
		var valido = 1;
		while(i--){
			if (installment[i].value <= 0) valido = 0;
		}
		if (valido){
			i = installment.length-1;
			var valorInicial = installment[i].value;
			while(i--){
				valorInicial*=(1+(factor[i]/100));
				installment[i].correctValue = valorInicial.toFixed(2);
				if(i<3) resultado += (installment[i].value - installment[i].correctValue)*12;
			}
			$scope.user.resultado = resultado;	
			console.log("installment",installment);
			console.log($scope.user,resultado);
		}
	}
});