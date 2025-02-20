import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../index.css";

console.log("🚀 El componente CarouselWrapper se está montando");

const carousel = (slider) => {
    if (!slider) return;

    console.log("✅ Keen Slider está ejecutando el callback de inicialización");

    const z = 300;
    function rotate() {
        const deg = 360 * slider.track.details.progress;
        console.log("🎯 Rotación aplicada:", deg);
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
    }

    slider.on("created", () => {
        console.log(
            "🛠️ Keen Slider creado con",
            slider.slides.length,
            "slides",
        );

        const deg = 360 / slider.slides.length;
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${
                deg * idx
            }deg) translateZ(${z}px)`;
        });
        rotate();
    });

    slider.on("detailsChanged", rotate);
};

const CarouselWrapper = () => {
    console.log("📌 useKeenSlider se está ejecutando");

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel],
    );

    useEffect(() => {
        console.log("🔍 InstanceRef:", instanceRef.current);
    }, [instanceRef]);

    return (
        <div className="wrapper">
            <div className="scene">
                <div className="carousel keen-slider" ref={sliderRef}>
                    <div className="carousel__cell number-slide1">1</div>
                    <div className="carousel__cell number-slide2">2</div>
                    <div className="carousel__cell number-slide3">3</div>
                    <div className="carousel__cell number-slide4">4</div>
                    <div className="carousel__cell number-slide5">5</div>
                    <div className="carousel__cell number-slide6">6</div>
                </div>
            </div>
        </div>
    );
};

export default CarouselWrapper;
