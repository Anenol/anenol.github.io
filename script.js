// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Image modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");

function openModal(imgSrc, title){
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  modalImg.src = imgSrc;
  modalTitle.textContent = title || "Pilt";
}

function closeModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
}

document.querySelectorAll(".project-media").forEach(btn => {
  btn.addEventListener("click", () => {
    const img = btn.getAttribute("data-img");
    const title = btn.getAttribute("data-title");
    openModal(img, title);
  });
});

modal.addEventListener("click", (e) => {
  if (e.target && e.target.getAttribute("data-close") === "1") closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
