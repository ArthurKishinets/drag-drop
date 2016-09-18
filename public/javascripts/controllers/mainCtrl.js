module.exports = ["$http", "$scope", function($http, $scope) {
    var main = this;
    $http.get("//content.guardianapis.com/search?order-by=newest&q=literature%20books&show-blocks=all&api-key=test")
        .then(function(response) {
            // get 5 articles from guardian
            main.articles = response.data.response.results.slice(5);
            for ( var i = 0; i < main.articles.length; i++ ) {
                main.articles[i].id = i;
            }
            // saving to localstorage
            localStorage.articles = JSON.stringify(main.articles);
            console.log(main.articles);
        });
}];