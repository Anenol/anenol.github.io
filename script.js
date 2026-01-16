// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");

function openModal(imgSrc, title) {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  modalImg.src = imgSrc;
  modalTitle.textContent = title || "Pilt";
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
}

// Open diploma modal
const diplomaBtn = document.getElementById("openDiploma");
if (diplomaBtn) {
  diplomaBtn.addEventListener("click", () => {
    const img = diplomaBtn.getAttribute("data-img");
    const title = diplomaBtn.getAttribute("data-title");
    openModal(img, title);
  });
}

// Close modal handlers
modal.addEventListener("click", (e) => {
  if (e.target && e.target.getAttribute("data-close") === "1") closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// CV modal
const openCVBtn = document.getElementById("openCV");
const cvModal = document.getElementById("cvModal");

function openCV() {
  cvModal.classList.add("show");
  cvModal.setAttribute("aria-hidden", "false");
}

function closeCV() {
  cvModal.classList.remove("show");
  cvModal.setAttribute("aria-hidden", "true");
}

if (openCVBtn && cvModal) {
  openCVBtn.addEventListener("click", openCV);

  cvModal.addEventListener("click", (e) => {
    if (e.target && e.target.getAttribute("data-close") === "cv") closeCV();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cvModal.classList.contains("show")) closeCV();
  });
}
