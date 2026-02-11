document.querySelectorAll(".video-player").forEach((player) => {
  const video = player.querySelector(".video-player__video");
  const btn = player.querySelector(".video-player__play");

  btn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      player.classList.add("playing");
      btn.innerHTML = "❚❚";
    } else {
      video.pause();
      player.classList.remove("playing");
      btn.innerHTML = "▶";
    }
  });
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 98) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
});

const items = document.querySelectorAll(".myWork__item");

items.forEach((item) => {
  const video = item.querySelector(".myWork__video");

  if (!video) return;

  item.addEventListener("mouseenter", () => {
    video.currentTime = 0;

    video.play().catch(() => {});
  });

  item.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;

    video.load();
  });
});
