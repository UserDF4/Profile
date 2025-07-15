document.addEventListener("DOMContentLoaded", function () {
    const characters = document.querySelectorAll(".character");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const popupDesc = document.getElementById("popup-desc");
    const closeBtn = document.querySelector(".close-btn");

    characters.forEach(character => {
        character.addEventListener("click", function () {
            const imgSrc = this.querySelector("img").src;
            const desc = this.getAttribute("data-desc");

            popupImg.src = imgSrc;
            popupDesc.textContent = desc;
            popup.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
