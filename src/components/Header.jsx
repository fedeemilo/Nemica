import PropTypes from "prop-types"

export default function Header({ heading, description }) {
  return (
    <section>
      <div>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

Header.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
};
