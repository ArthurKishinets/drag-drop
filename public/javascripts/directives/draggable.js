module.exports = function() {
    return {
        restrict: 'EA',
        bindToController: true,
        scope: {
           myarticle: '=article'
        },
        controllerAs: 'ctrl',
        templateUrl: '../../views/draggableArticle.html',
        link: function(scope, element, attr) {
        },
        controller: function() {
            this.clicked = function() {
                alert('clicked');
            };
            this.dragstartHandler = function() {
                alert('drag');
           };
        }
    };
 };