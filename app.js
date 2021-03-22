window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const paragraph = document.querySelector(".app header p");
    const colors = ["#60d394", "#d36060", "#c060d3", "#d3d168", "#6860d3", "#60b2d3"];

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
            paragraph.style.animation = "scale .3s infinite alternate";
        });
    });

    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.append(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function () {
            visual.removeChild(this);
        });
    };
});
