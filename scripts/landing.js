function funcK() {
    'use strict';
    var animatePoints = function () {
            var i,
                revealPoint,
                points = document.getElementsByClassName('point');
            revealPoint = function (index) {
                    
                points[index].style.opacity = 1;
                points[index].style.transform = "scaleX(1) translateY(0)";
                points[index].style.msTransform = "scaleX(1) translateY(0)";
                points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
            };
        
            for (i = 0; i < points.length; i + 1) {
                revealPoint(i);
            }
        };
}