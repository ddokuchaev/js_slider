const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const SlidesCount = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");

let activeSlideIdx = 0;

sidebar.style.top = `-${(SlidesCount - 1) * 100}vh`;

document.addEventListener("keydown",(event)=>{
    if(event.key === "ArrowUp") {
        changeSlide("up");
    } else if(event.key === "ArrowDown") {
        changeSlide("down");
    }
});

upBtn.addEventListener("click", () => {
    changeSlide("up");
});
downBtn.addEventListener("click", () => {
    changeSlide("down");
});

function changeSlide(direction) {

    if (direction === "up") {
        activeSlideIdx++;
        if (activeSlideIdx === SlidesCount) {
            activeSlideIdx = 0;
        }
    } else if (direction === "down") {
        activeSlideIdx--;
        if (activeSlideIdx < 0 ) {
            activeSlideIdx = SlidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIdx * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIdx * height}px)`;

}