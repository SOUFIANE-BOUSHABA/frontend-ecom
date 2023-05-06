function fadeIn() {
    var fade = document.getElementById("fade");
    var fade_left = document.getElementById("fade_left");
    fade.style.opacity = 1;
    fade_left.style.opacity = 1;
  }

//   slide show lowl
    
    var currentSlide = 0;
    var slides = document.getElementsByClassName("slide");
    showSlide(currentSlide);

    function changeSlide(n) {
    currentSlide += n;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
    }

    function showSlide(n) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
    }


