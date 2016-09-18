module.exports = [ "$rootScope", function($rootScope) {
    return {
        restrict: 'E',
        scope: {
            article: '='
        },
        transclude: "true",
        templateUrl: '../../views/getnew.html',
        link: function(scope, element, attr) {

        }
    };
}];