import PropTypes from "prop-types";

export default function Line({ imgSrc, description }) {
  return (
    <section className="flex items-center justify-center w-full tracking-wider">
      <div className="h-15 w-15 mr-4">
        <img src={imgSrc} className="h-full w-full object-cover" />
      </div>
      <div>
        <p>{description}</p>
      </div>
    </section>
  );
}

Line.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string,
};
