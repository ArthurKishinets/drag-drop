var angular = require('angular');
var ngRoute = require('angular-route');
var mainCtrl = require('./controllers/mainCtrl');
var newsCtrl = require('./controllers/newsCtrl');
var draggable = require('./directives/draggable');
var droppable = require('./directives/droppable');
var getnew = require('./directives/news');
var getArticle = require('./services/getArticles');


angular.module('solutions', [ngRoute])
 .config([ "$routeProvider", function($routeProvider){
        $routeProvider
            .when("/news", {
                templateUrl : "../views/news.html",
                controller: "newsCtrl",
                controllerAs: "news"
            })
            .when("/articles", {
                templateUrl : "../views/articles.html",
                controllerAs: 'main'
            })
            .otherwise("/articles");
    }]).run(["$rootScope", function($rootScope) {
        $rootScope.news = [];
        console.log('root', $rootScope.news);
    }]);

angular.module('solutions')
    .controller('mainCtrl', mainCtrl)
    .controller('newsCtrl', newsCtrl)
    .directive('myDraggable', draggable)
    .directive('myDroppable', droppable)
    .directive('getNew', getnew)
    .service('getArticles', getArticle);