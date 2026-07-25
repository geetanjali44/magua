// Change image inside the current page only
function changeImage(img){

    const page = img.closest(".page");

    const mainImage = page.querySelector(".main-image img");

    mainImage.src = img.src;

    page.querySelectorAll(".thumb").forEach(item=>{
        item.classList.remove("active");
    });

    img.parentElement.classList.add("active");
}



// -----------------------------

// Horizontal Swipe

// -----------------------------

const slider = document.querySelector(".slider");

const pages = document.querySelectorAll(".page");

let currentPage = 0;

let startX = 0;

let endX = 0;



slider.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});



slider.addEventListener("touchmove",(e)=>{

    endX = e.touches[0].clientX;

});



slider.addEventListener("touchend",()=>{

    let distance = startX - endX;



    // Swipe Left

    if(distance > 60){

        if(currentPage < pages.length-1){

            currentPage++;

        }

    }



    // Swipe Right

    if(distance < -60){

        if(currentPage > 0){

            currentPage--;

        }

    }



    slider.style.transform =
    `translateX(-${currentPage*100}vw)`;

});




// Optional Keyboard Support

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        if(currentPage < pages.length-1){

            currentPage++;

        }

    }



    if(e.key==="ArrowLeft"){

        if(currentPage > 0){

            currentPage--;

        }

    }



    slider.style.transform =
    `translateX(-${currentPage*100}vw)`;

});