module.exports = function() {
    return {
        restrict: 'E',
        bindToController: true,
        scope: {
           myarticle: '=article'
        },
        controllerAs: 'ctrl',
        templateUrl: '../../views/draggableArticle.html',
        link: function(scope, element, attr) {
            element.on('dragstart', function(evt) {
                // pass id of the block to the dragged data
                evt.originalEvent.dataTransfer.setData('text', element.attr('id'));
            });
            element.on('drop', function(evt) {
                evt.preventDefault();
            });
        },
        controller: function() {
        }
    };
 };