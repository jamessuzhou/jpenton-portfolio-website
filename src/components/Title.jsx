import PropTypes from "prop-types";

const Title = ({ firstWord, secondWord }) => {
  return (
    <div className="section-title">
      <h2>
        {firstWord} <span>{secondWord}</span>
      </h2>
    </div>
  );
};

Title.propTypes = {
  firstWord: PropTypes.string.isRequired,
  secondWord: PropTypes.string.isRequired,
};

export default Title;
