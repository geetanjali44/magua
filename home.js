// Change only the big image on the current page
function changeImage(img) {
    const page = img.closest(".page");
    const mainImage = page.querySelector(".main-image img");

    mainImage.src = img.getAttribute("src");

    page.querySelectorAll(".thumb").forEach((thumb) => {
        thumb.classList.remove("active");
    });

    img.closest(".thumb").classList.add("active");
}


// Slider elements
const slider = document.querySelector(".slider");
const pages = document.querySelectorAll(".page");

// Clear any transform added by the old JavaScript
slider.style.transform = "";


// Optional keyboard support
document.addEventListener("keydown", (event) => {
    if (
        event.key !== "ArrowRight" &&
        event.key !== "ArrowLeft"
    ) {
        return;
    }

    event.preventDefault();

    const pageWidth = slider.clientWidth;
    const currentPage = Math.round(
        slider.scrollLeft / pageWidth
    );

    const direction =
        event.key === "ArrowRight" ? 1 : -1;

    const nextPage = Math.max(
        0,
        Math.min(
            pages.length - 1,
            currentPage + direction
        )
    );

    slider.scrollTo({
        left: nextPage * pageWidth,
        behavior: "smooth"
    });
});
