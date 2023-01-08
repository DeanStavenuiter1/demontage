const photobook = document.querySelector(".photobook");
const dropdown = document.querySelector(".dropdown");

photobook.addEventListener("mouseover", (e) => {
    dropdown.style.display = "block";
})

dropdown.addEventListener("mouseout", (e) => {
    dropdown.style.display = "none";
})