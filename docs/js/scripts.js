document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

let slideIndex = 1;

window.onload = () => {
    const slides = document.getElementsByClassName("slide");
    const counter = document.getElementById("slide-counter");

    showSlides(slideIndex);

    window.plusSlides = function(n) {
        slideIndex += n;
        if (slideIndex > slides.length) slideIndex = 1;
        if (slideIndex < 1) slideIndex = slides.length;
        showSlides(slideIndex);
    };

    function showSlides(n) {
        if (slides.length === 0) return;

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }

        slides[n - 1].classList.add("active");

        if (counter) {
            counter.textContent = `${n} of ${slides.length}`;
        }
    }
};

let showingCat = true;

function toggleSlide() {
  const catSlide = document.getElementById("catSlide");
  const comingSlide = document.getElementById("comingSlide");

  if (showingCat) {
    catSlide.style.display = "none";
    comingSlide.style.display = "block";
  } else {
    comingSlide.style.display = "none";
    catSlide.style.display = "block";
  }

  showingCat = !showingCat;
}
