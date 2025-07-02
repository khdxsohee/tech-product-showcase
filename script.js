document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll(".like-btn");

  likeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("liked");
      btn.classList.toggle("fa-regular");
      btn.classList.toggle("fa-solid");
    });
  });
});
