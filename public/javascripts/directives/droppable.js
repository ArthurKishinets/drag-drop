module.exports = ["$rootScope", function( $rootScope ) {
    return {
        restrict: 'E',
        controllerAs: 'drop',
        template: '<div class="dropZone"></div>',
        link: function(scope, element, attr) {
            element.on('drop', function(evt) {
                evt.preventDefault();
                console.log(!$(evt.target).find('div').hasClass('dropZone'));
                if (!$(evt.target).find('div').hasClass('dropZone')) {
                    console.log('THERE IS NO DROPZONE CLASS');
                    return false;
                }

                var id = evt.originalEvent.dataTransfer.getData("text");
                var elem  = document.getElementById(id).parentNode;

                $rootScope.news.push(id);
                //console.log('classlist', evt.target.className);

                //$('.dropZone')[0].appendChild(elem);
                /*if (evt.target.classList.contains('dropZone')) {
                    console.log('yes');

                }*/
                evt.target.appendChild(elem);
                //console.log(evt.target);

                elem.removeAttribute("draggable");
                $('.dropZone div').attr('draggable', 'false');
                //var height = $('.dropDiv').height();
                //$('.dropZone').css({"height": height - 10 + "px"});

                //evt.target.childNodes.className = "";
                $(evt.target).find('div').has('dropZone').removeClass('dropZone');
                $(evt.target).find('div').removeClass('dropZone');
                $(evt.target).removeClass('dropZone');
                console.log('removed', $(evt.target).find('div').has('dropZone'));
                // if we moved all the articles enable button to the news
                if(!$('.articlesall div').length) {
                    $('.newsButton')[0].removeAttribute('disabled');
                    console.log($('.newsButton')[0]);
                    console.log($rootScope.news);
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