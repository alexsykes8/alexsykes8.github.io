document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.video-container video');

  videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.play();
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });

  const videosvtube = document.querySelectorAll('.vtube-container video');

  videosvtube.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.play();
    });

    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });
});

function toggleBanner(element) {
  // Find the closest expandable-banner to the clicked arrow
  const banner = element.closest('.expandable-banner');

  // Toggle the "open" class on the correct banner
  banner.classList.toggle('open');

  // Change the text inside the arrow
  const arrowText = banner.querySelector('.arrow p');
  if (banner.classList.contains('open')) {
    arrowText.textContent = "[Collapse]";
  } else {
    arrowText.textContent = "[Expand]";
  }
}




