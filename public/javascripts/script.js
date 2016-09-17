var angular = require('angular');
var ngRoute = require('angular-route');
var mainCtrl = require('./controllers/mainCtrl');
var draggable = require('./directives/draggable');


angular.module('solutions', [ngRoute])
 .config([ "$routeProvider", function($routeProvider){
        $routeProvider
            .when("/", {
                templateUrl : "../views/index.html"
            })
            .when("/articles", {
                templateUrl : "../views/articles.html"
            });
    }]);

angular.module('solutions')
    .controller('mainCtrl', mainCtrl)
    .directive('myDraggable', draggable);