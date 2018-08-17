$( document ).ready(function() {

    var homeSlideIndex = 0;
    showHomeSlides();

    function showHomeSlides() {
        var i;
        var homeSlides = document.getElementsByClassName("slideshow");
        for (i = 0; i < homeSlides.length; i++) {
            homeSlides[i].style.display = "none"; 
        }
        homeSlideIndex++;
        if (homeSlideIndex > homeSlides.length) {homeSlideIndex = 1} 
        homeSlides[homeSlideIndex-1].style.display = "block"; 
        setTimeout(showHomeSlides, 3000);
    }
});