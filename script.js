// Start music when tap screen
document.getElementById("start-screen").addEventListener("click", () => {
  document.getElementById("music-container").style.display = "block";
  document.getElementById("start-screen").style.display = "none";
});

// Typewriter + scroll animation
const quotes = document.querySelectorAll('.quote, .final-quote');

function typeWriter(element) {
  const text = element.dataset.text;
  element.textContent = '';
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 70);
    }
  }
  typing();
}

function checkVisibility() {
  quotes.forEach(q => {
    const rect = q.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0 && !q.classList.contains('fade-in')) {
      q.classList.add('fade-in');
      typeWriter(q);
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
