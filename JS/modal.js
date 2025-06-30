const modal = document.getElementById("reserv-modal");
const modalBox = modal.querySelector(".modal-box");
const closeBtn = document.getElementById("close-reserv-modal-btn");
const openBtn = document.getElementById("open-modal-btn");

openBtn.addEventListener("click", function(){
    modal.classList.add("open")
})

closeBtn.addEventListener("click", function(){
    modal.classList.remove("open")
})

modal.addEventListener("click", (event) => {
    if (!modalBox.contains(event.target)) {
        modal.classList.remove("open");
    }
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

modalBox.addEventListener("click", (event) => {
    event.stopPropagation();
});
