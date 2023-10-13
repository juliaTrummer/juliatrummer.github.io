document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.getElementById("text-container");
    const textAnimation = document.getElementById("text-animation");

    textAnimation.addEventListener("animationend", function () {
        // Change the text after the animation completes
        textContainer.innerText = "New Text After Animation";
    });
});