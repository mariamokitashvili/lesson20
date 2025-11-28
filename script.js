/* 1) ციფრული საათი  */
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", { hour12: true });
  document.getElementById("clock").textContent = time;
}
setInterval(updateClock, 1000);
updateClock();

/* 2) სლაიდერი */

const images = [
  "https://picsum.photos/id/115/800/600",
  "https://picsum.photos/id/125/800/600",
  "https://picsum.photos/id/135/800/600",
  "https://picsum.photos/id/140/800/600",
];

let index = 0;
let sliderInterval;

function startSlider() {
  sliderInterval = setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = images[index];
  }, 5000);
}

function stopSlider() {
  clearInterval(sliderInterval);
}

startSlider();

const slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", stopSlider);

slider.addEventListener("mouseleave", startSlider);

/*  3) Countdown */
function updateCountdown() {
  const now = new Date();

  const target = new Date();
  target.setHours(20, 0, 0, 0); // 20:00:00.000

  // თუ უკვე 20:00 გადაცდა საერთოდ არ დაითვალოს
  if (now > target) {
    document.getElementById("countdown").textContent = "Lecture Started!";
    return;
  }

  const diff = target - now;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById(
    "countdown"
  ).textContent = `20:00-მდე დარჩენილია: ${hours}სთ ${minutes}წთ ${seconds}წმ`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
