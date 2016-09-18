module.exports = ["$rootScope", function( $rootScope ) {
    return {
        restrict: 'E',
        controllerAs: 'drop',
        template: '<div class="dropZone"></div>',
        link: function(scope, element, attr) {
            element.on('drop', function(evt) {
                evt.preventDefault();
                //if we already droped something in this area or we are not allowed to drop here then cancel
                if (!$(evt.target).find('div').hasClass('dropZone')) {
                    return false;
                }
                // getting id of the droped block and it`s parent element
                var id = evt.originalEvent.dataTransfer.getData("text");
                var elem  = document.getElementById(id).parentNode;
                // insert id to array that we will use to display article in the right order
                $rootScope.news.push(id);
                // insert element
                evt.target.appendChild(elem);
                // make this block undraggable in future
                $('#' + id + ' div').removeAttr("draggable");
                console.log('shit', $('#' + id + ' div') )
                // make droppable block undroppable in future
                $(evt.target).find('div').removeClass('dropZone');
                // if we moved all the articles enable button to the news
                if(!$('.articlesall div').length) {
                    $('.newsButton')[0].removeAttribute('disabled');
                }
            });
            element.on('dragover', function(evt) {
                evt.preventDefault();
            });
        },
        controller: function() {
        }
    };
}];