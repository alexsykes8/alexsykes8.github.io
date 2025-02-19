let index = 0;

function moveSlide(step) {
  const images = document.querySelectorAll('.carousel-image');
  index += step;

  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }

  const offset = -index * 100;
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}
