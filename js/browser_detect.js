function detectBrowser() {
    const marquee_blur = document.querySelector(".marquee_blur");
    const marquee_p = document.querySelector(".marquee_blur p");

    if (!marquee_blur || !marquee_p) {
        console.log("ELEMENTS NOT FOUND!!");
        return;
    }

    let backgroundImage;
    let blurFilter;

    if (navigator.userAgent.includes("Chrome")) {
        backgroundImage = "linear-gradient(to right, white, 0.5rem, transparent 50%), linear-gradient(to left, white, 0.5rem, transparent 50%)";
        blurFilter = "blur(0.02em)";
    } else if (navigator.userAgent.includes("Firefox")) {
        backgroundImage = "linear-gradient(to right, white, 1rem, transparent 50%), linear-gradient(to left, white, 1rem, transparent 50%)";
        blurFilter = "blur(0.07em)";
    } else if (navigator.userAgent.includes("Safari")) {
        backgroundImage = "linear-gradient(to right, white, 1rem, transparent 50%), linear-gradient(to left, white, 1rem, transparent 50%)";
        blurFilter = "blur(0.07em)";
    } else {
        console.log("Browser not detected or unsupported");
        return;
    }

    // Apply the background image to the single .marquee_blur element
    marquee_blur.style.backgroundImage = backgroundImage;

    // Apply the blur filter to the single <p> element inside .marquee_blur
    marquee_p.style.filter = blurFilter;
    console.log("Styles applied");
}

document.addEventListener("DOMContentLoaded", detectBrowser);
