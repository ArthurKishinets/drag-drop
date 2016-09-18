module.exports = ["$rootScope", function( $rootScope ) {


    function getAllArticles() {
        var sorted = [], news =  JSON.parse(localStorage.articles), currentArticle = [];
        console.log('getAllarticles');
        console.log('  ROOT', $rootScope.news);
        for( var i = 0; i < news.length; i++ ) {
            currentArticle = news.filter(function(item) {
                return +item.id === +$rootScope.news[i];
            });
            sorted.push(currentArticle[0]);
           /* for( var j = 0; j < $rootScope.news.length; i++ ) {
                if ( +$rootScope.news[j] === +news[i].id) {
                    console.log('match', +$rootScope.news[i], +news[i].id );
                    sorted.push(news[i]);
                }
                else {
                    console.log('not match', +$rootScope.news[i], +news[i].id);
                }
            }*/
        }
        console.log('SORTED', sorted);
        return sorted;
    }

    return {
        getAllArticles: getAllArticles
    };
}];