const testimonialWidth = document.getElementById('testimonial-items').clientWidth;
const testimonialBullets = document.getElementById('bullets').children;
const testimonialCount = testimonialBullets.length;
const testimonials = document.getElementById('testimonials-wrapper');
const autoPlayInterval = 4000;

if (document.body && document.body.offsetWidth) {
  testimonials.style.width = testimonialWidth * testimonialCount + 'px';
}

if (window.innerWidth) {
  testimonials.style.width = testimonialWidth * testimonialCount + 'px';
}

const goToTestimonial = (index) => {
  for (let bullet of testimonialBullets) {
    bullet.className = "bullet-item";
  }

  testimonialBullets[index].className += " bullet-item--active";
  testimonials.style.left = index * testimonialWidth * -1 + 'px';;
};

let currentTestimonial = 0;

const autoPlay = setInterval(() => {
  currentTestimonial = (currentTestimonial < testimonialCount - 1) ? currentTestimonial + 1 : 0;
  goToTestimonial(currentTestimonial);
}, autoPlayInterval);

for (let i = 0; i < testimonialBullets.length; i++) {
  testimonialBullets[i].addEventListener('click', () => {
    clearInterval(autoPlay);
    goToTestimonial(i);
  });
}
