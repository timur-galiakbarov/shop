(function (module) {


    module.directive("radLoader", [function () {
        return {
            restrict: 'A',
            controller: ['$scope', function ($scope) {

            }],
            link: function (scope, element, attr, ctrls) {
                console.log('radLoader okay');
                console.log(scope);
                console.log(element);

                var className = 'loader';
                if (attr.radLoader){
                    scope.$watch(attr.radLoader, function (loading) {
                        element.toggleClass(className, !!loading);
                    });
                }
            }
        };
    }]);

})(angular.module("rad.ui.directives"));