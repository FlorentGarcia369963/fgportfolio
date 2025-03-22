//Flickity carousel
import Flickity from "flickity";
const mediaQuery = window.matchMedia("(min-width: 1024px)");
const options = {
    accessibility: true,
    draggable: true,
    dragThreshold: 10,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15,
    },
};

const carousel = document.querySelector(
    "[data-carousel]"
) as HTMLElement | null;
const slides = document.getElementsByClassName("carousel-cell");

if (carousel) {
    const flkty = new Flickity(carousel, options);

    flkty.on("dragStart", () => {
        const moreBtnEls = document.querySelectorAll(".more-btn");
        const projectContexts = document.querySelectorAll(".project-context");
        const projectTitles = document.querySelectorAll(".project-title");
        const reductionBtnEls = document.querySelectorAll("#reduction-btn");
        const btnToDisplayEls = document.querySelectorAll("#btn-to-display");
        const presentationEls = document.querySelectorAll(".presentation-mini");
        projectContexts.forEach((item) =>
            item.classList.remove("hidden", "min-[800px]:block")
        );
        projectTitles.forEach((item) =>
            item.classList.remove("hidden", "min-[800px]:block")
        );
        // reductionBtnEls.forEach(item=>item.classList)
        btnToDisplayEls.forEach((item) =>
            item.classList.remove("visible", "flex", "flex-col")
        );
        presentationEls.forEach((item) => item.classList.remove("clicked"));
        moreBtnEls.forEach((item) => item.classList.remove("hidden"));
    });

    function handleMobileScreens(e?: MediaQueryListEvent) {
        const isDesktop = e ? e.matches : mediaQuery.matches;
        if (isDesktop) {
            console.log("mode desktop");

            if (!(flkty as any)._scrollEventAttached) {
                flkty.on("scroll", function () {
                    flkty.slides.forEach(function (slide: any, i: number) {
                        const image = slides[i] as HTMLElement;

                        const x = ((slide.target + (flkty as any).x) * -1) / 3;
                        image.style.backgroundPosition = x + "px";
                    });
                });
                (flkty as any).scrollEventAttached = true;
            }
        }
    }
    handleMobileScreens();
    mediaQuery.addEventListener("change", handleMobileScreens);
}
