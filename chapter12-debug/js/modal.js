const modalLayer = document.querySelector("#modal-layer");
const modalCloseButton = document.querySelector("#modal-close");

export function showModal({ name, desc, website }) {
  const infoArea = document.querySelector("#modal-info");

  infoArea.innerHTML = `
    <h3>${name}</h3>
    <p>${desc}</p>
    <a href="${website}" class="text-success">go website</a>
  `;
  modalLayer.classList.remove("hidden");
  modalLayer.classList.add("visible");
}

export function hideModal() {
  modalLayer.classList.remove("visible");
  modalLayer.classList.add("hidden");
}

modalCloseButton.addEventListener("click", hideModal);