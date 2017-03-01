function disableClicks(link) {
    'use strict';
    link.addEventListener('click', function(event) {
        event.preventDefault();
    });
}

var links = [].slice.call(document.querySelectorAll('a'));
links.forEach(disableClicks);
