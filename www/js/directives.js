angular.module('app.directives', [])

  .directive('uiAltura', [function () {
    return {
      require: "ngModel",
      link: function (scope, elem, attrs, ctrl) {
        var _formatAltura = function (peso) {

          peso = peso.replace(/[^0-9.]+/g, "");

          if (peso.length > 1 && peso.indexOf(".") === -1) {
            peso = peso.substring(0, 1) + "." + peso.substring(1);
          }

          if (peso.length > 4) {
            peso = peso.substring(0, 4);
          }
          return peso;
        };

        elem.bind("keyup", function () {
          ctrl.$setViewValue(_formatAltura(ctrl.$viewValue));
          ctrl.$render();
        });
      }
    }
  }])

  .directive('uiPeso', [function () {
    return {
      require: "ngModel",
      link: function (scope, elem, attrs, ctrl) {
        var _formatPeso = function (peso) {
          peso = peso.replace(/[^0-9.]+/g, "");

          if (peso.length > 2 && peso.indexOf(".") === -1) {
            peso = peso.substring(0, 2) + "." + peso.substring(2);
          }

          if (peso.length > 5) {
            peso = peso.substring(0, 5);
          }
          return peso;
        };

        elem.bind("keyup", function () {
          ctrl.$setViewValue(_formatPeso(ctrl.$viewValue));
          ctrl.$render();
        });
      }
    }
  }]);

