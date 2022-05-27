import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"


const scrollTracker = document.querySelector('.scroll--tracker');
const animatedImg = document.querySelectorAll('.img--container img');

const scrollTrackerTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)],
})

animatedImg.forEach((image) => {
    const imageTop = image.offsetTop;
    const imageHeight = image.offsetHeight;
    //     const animateImgTimeline = new ScrollTimeline({
    //     scrollOffsets: [
    //         // `{ target: image, edge: "end", threshold: "1"},
    //         // { target: image, edge: "start", threshold: "1"},`
    //         CSS.px(imageOffsetTop + imageHeight - window.innerHeight),
    //         CSS.px(imageOffsetTop)
    //     ]
    // })
    image.animate(
        {
            transform: [
                "perspective(1000px) rotateX(45deg)",
                "perspective(1000px) rotateX(0)"
            ],
            opacity: ["0.1", "1"],
        },
        {
            duration: 1,
            easing: "linear",
            timeline: new ScrollTimeline({
                scrollOffsets: [
                    CSS.px(imageTop + imageHeight - window.innerHeight + 200),
                    CSS.px(imageTop),
                    // { target: image, edge: "end", threshold: "0" },
                    // { target: image, edge: "start", threshold: "1" },
                ]
            }),
        }
    )
})



scrollTracker.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"]
    },
    {
        duration: 1,
        timeline: scrollTrackerTimeline,
    }
)


