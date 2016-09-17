module.exports = function($http, $scope) {
    var main = this;
    $http.get("http://content.guardianapis.com/search?order-by=newest&q=literature%20books&show-blocks=all&api-key=test")
        .then(function(response) {
            main.articles = response.data.response.results.slice(5);
            console.log(main.articles);
        });
};