import PropTypes from "prop-types";

export default function HeadingImage({ imgSrcMobile, videoSrc, alt }) {
  return (
    <section>
      <div>
        {/* Video para Desktop */}
        <video
          className="hidden md:block w-full h-full object-fill lg:justify-self-center"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/webm" />
          Tu navegador no soporta este video.
        </video>
        {/* Imagen para Mobile */}
        <img
          src={imgSrcMobile}
          alt={alt}
          className="block md:hidden w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

HeadingImage.propTypes = {
  imgSrcMobile: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
