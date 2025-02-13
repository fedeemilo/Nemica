import PropTypes from "prop-types";

export default function Hero({ imgSrcMobile, imgSrcDesktop, heading, description }) {
  return (
    <section>
      <div>
        {/* Imagen para Desktop */}
        <img
          src={imgSrcDesktop}
          alt={heading}
          className="hidden md:block w-auto h-auto object-fill lg:justify-self-center"
        />
        {/* Imagen para Mobile */}
        <img
          src={imgSrcMobile}
          alt={heading}
          className="block md:hidden w-full h-full object-cover"
        />
      </div>
      <div>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

Hero.propTypes = {
  imgSrcMobile: PropTypes.string.isRequired, // Imagen para mobile
  imgSrcDesktop: PropTypes.string.isRequired, // Imagen para desktop
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
};
