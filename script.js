
const text = "Aspiring Full Stack Developer ";
let i = 0;

function type() {
  if (i < text.length) {
    document.querySelector(".tagline").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

window.onload = type;
function toggleMode() {
  document.body.classList.toggle("dark-mode");

  const btn = document.querySelector(".mode-toggle");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
}

