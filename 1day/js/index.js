(function () {
    var button = document.getElementById('button'),
        span = document.createElement('span'),
        max,
        x,
        y;

    button.addEventListener('click', function (event) {
        button.addEventListener("Animation", function () {
            if (button.contains(span)) {
                button.removeChild(span);
            }
        }, false);

        max = Math.max(this.offsetWidth, this.offsetHeight);
        x = event.x - this.offsetLeft - max / 2;
        y = event.y - this.offsetTop - max / 2;

        span.className = 'circle';
        span.style.cssText = "width:" + max + "px;height:" + max + "px;left:" + x + "px;top:" + y + "px;";
        span.className += ' animate';
        button.appendChild(span);

    }, false);
}());