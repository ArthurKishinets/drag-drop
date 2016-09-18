module.exports = ["$rootScope", function( $rootScope ) {

    function getAllArticles() {
        var sorted = [], news =  JSON.parse(localStorage.articles), currentArticle = [];
        for( var i = 0; i < news.length; i++ ) {
            //find article that should be at "i" place by comparing id`s
            currentArticle = news.filter(function(item) {
                return +item.id === +$rootScope.news[i];
            });
            sorted.push(currentArticle[0]);
        }
        console.log('SORTED', sorted);
        return sorted;
    }

    return {
        getAllArticles: getAllArticles
    };
}];