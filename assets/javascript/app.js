$( document ).ready(function() {

    //Click through Slideshow
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("img");
        if (n > slides.length) {slideIndex = 1} 
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slides[slideIndex-1].style.display = "block"; 
    }

    $(".fa-angle-left").click(function(){
        plusSlides(-1);
    });

    $(".fa-angle-right").click(function(){
        plusSlides(-1);
    });

    // $(window).scroll(function() {scrollFunction()} );
 
    // var aptName = document.getElementById("apt-maple");
    // var sticky = aptName.offsetTop;

    // function scrollFunction() {
    //     if (window.pageYOffset >= sticky) {
    //         aptName.classList.add("sticky")
    //     } 
    //     else {
    //         aptName.classList.remove("sticky");
    //     }
    // }
});