module.exports = ["getArticles", function(getArticles) {
    this.getArticles = getArticles.getAllArticles;
    // getting articles in the Right Order
    this.articles = this.getArticles();
}];