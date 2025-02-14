import PropTypes from "prop-types";

export default function Icons({ imgSrcMobile, imgSrcDesktop,  }) {
  return (
    <section>
      <div className=" grid-flow-col auto-cols-[minmax(300px,1fr)] gap-3 p-4 overflow-hidden">
        {/* Imagen para Desktop */}
        <img
          src={imgSrcDesktop}
          className=""
        />
        {/* Imagen para Mobile */}
        <img
          src={imgSrcMobile}
          className=""
        />
      </div>
    </section>
  );
}

Icons.propTypes = {
  imgSrcMobile: PropTypes.string.isRequired, // Imagen para mobile
  imgSrcDesktop: PropTypes.string.isRequired, // Imagen para desktop
};