angular.module('app.controllers', [])

  .controller('calcularIMCCtrl', function ($scope) {

    $scope.hasError = function (imcForm, field) {
      return imcForm[field.$name].$invalid && imcForm.$submitted;
    };

    $scope.notHasError = function (imcForm, field) {
      return imcForm[field.$name].$valid && imcForm.$submitted;
    };

    $scope.calcIMC = function (imcForm, imc) {

      if (imcForm.$invalid) {
        return;
      }

      var tabelaIMC = {
        0: {"min": 0, "max": 17, "msg": "Você está muito abaixo do seu peso ideal!"},
        1: {"min": 17, "max": 18.5, "msg": "Você está abaixo do seu peso ideal!"},
        2: {"min": 18.5, "max": 25, "msg": "Parabéns, você está em seu peso ideal!"},
        3: {"min": 25, "max": 30, "msg": "Sobrepeso - você está acima do seu peso ideal."},
        4: {"min": 30, "max": 35, "msg": "Obesidade - grau I"},
        5: {"min": 35, "max": 40, "msg": "Obesidade - grau II (severa)"},
        6: {"min": 40, "max": 1000, "msg": "Obesidade - grau III (mórbida)"}
      };

      var peso = angular.copy(imc.peso);
      var altura = angular.copy(imc.altura);

      /* calcula o IMC */
      var resultado = 0;

      peso = parseFloat(peso);
      altura = parseFloat(altura);

      if (altura > 100) {
        altura = altura / 100;
      }

      resultado = peso / (altura * altura);
      resultado = resultado.toFixed(2); // ajusta o numero de casas decimais

      /* exibe o resultado */
      $scope.resultIMC = resultado.replace(".", ",");

      var i = 0;
      for (i in tabelaIMC) {
        if ((resultado > parseFloat(tabelaIMC[i]['min'])) && (resultado <= parseFloat(tabelaIMC[i]['max']))) {
          $scope.msgResultIMC = tabelaIMC[i]['msg'];
          break;
        }
      }
    }
  })

  .controller('compartilharIMCCtrl', function ($scope) {

  })
