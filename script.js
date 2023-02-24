const btnEl = document.querySelector(".btn");
const mainContainerEl = document.querySelector(".main-container");
const popupContainerEl = document.querySelector(".popup-container")
const closeBtn = document.querySelector(".fa-times")


btnEl.addEventListener("click", () => {
	mainContainerEl.classList.add("active");
	popupContainerEl.classList.remove("active")
})

closeBtn.addEventListener("click", () => {
	popupContainerEl.classList.add("active");
	mainContainerEl.classList.remove("active");
})