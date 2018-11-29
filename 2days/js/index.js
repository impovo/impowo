var dots = 4;
var sliderElem = document.querySelector('.slider');
var dotElems = sliderElem.querySelectorAll('.dot');
var indicatorElem = sliderElem.querySelector('.indicator');

Array.prototype.forEach.call(dotElems, function (dotElem) {

    dotElem.addEventListener('click', function (e) {

        var currentPos = parseInt(sliderElem.getAttribute('data-pos'));
        var newPos = parseInt(dotElem.getAttribute('data-pos'));

        var newDirection = newPos > currentPos ? 'right' : 'left';
        var currentDirection = newPos < currentPos ? 'right' : 'left';

        indicatorElem.classList.remove('indicator--' + currentDirection);
        indicatorElem.classList.add('indicator--' + newDirection);
        sliderElem.setAttribute('data-pos', newPos);
    });
});
