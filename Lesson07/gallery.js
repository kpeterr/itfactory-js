'use strict';

(function () {
    var imageFiles = [
        './img/01.jpg',
        './img/02.jpg',
        './img/03.jpg',
        './img/04.jpg',
        './img/05.jpg'
    ];

    var prev, next, img, currentIndex;

    init();

    document.body.addEventListener('click', function(event) {
        setCurrentIndexBasedOnDirection(event.target.id)
        displayCurrentImage();
        disableButtonsOnEnds()
    });

    function init() {
        initDomElements();
        currentIndex = 0;
        displayCurrentImage();    
    }

    function initDomElements() {
        prev = document.getElementById('prev');
        prev.setAttribute('disabled', 'disabled');
        next = document.getElementById('next');
        img = document.createElement('img');
        addImageElement();
    }

    function addImageElement() {
        document.getElementById('image-wrapper').appendChild(img);
    }

    function displayCurrentImage() {
        img.src = imageFiles[currentIndex];
    }

    function setCurrentIndexBasedOnDirection(direction) {
        if (direction === 'next') {
            currentIndex = Math.min(currentIndex + 1, imageFiles.length - 1); 
        } else if (event.target.id === 'prev') {
            currentIndex = Math.max(currentIndex - 1, 0);
        }
    }

    function disableButtonsOnEnds() {
        addAttributeOnIndex(prev, 0);
        addAttributeOnIndex(next, imageFiles.length - 1);
    }

    function addAttributeOnIndex(button, index) {
        if (currentIndex === index) {
            button.setAttribute('disabled', 'disabled');
        } else {
            button.removeAttribute('disabled');
        }
    }
})();