



// parallax

function mouseMoveParallax(selectorId) {
    let scene = document.getElementById(`${selectorId}`);
    if (scene) {
        let parallaxInstance = new Parallax(scene);
    }
}

mouseMoveParallax("parallax-mouse");

// dynamic height for vertical swiper

const h2VerticalSwiper = document.querySelector("#h2-vertical-swiper");
if (h2VerticalSwiper) {
    h2VerticalSwiper.style.height =
        h2VerticalSwiper.firstElementChild.firstElementChild.clientHeight + "px";
}

// toggle options

const optionInput = document.getElementById("option");

if (optionInput) {
    optionInput.addEventListener("focus", (e) => {
        e.target.nextElementSibling.classList.remove("hidden");
    });
    optionInput.addEventListener("blur", (e) => {
        e.target.nextElementSibling.classList.add("hidden");
    });
}