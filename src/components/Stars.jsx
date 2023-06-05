import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);
const createArray = (length) => [...Array(length)];

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

Star.propTypes = {
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

StarRating.propTypes = {
  totalStars: PropTypes.number.isRequired,
};

export default StarRating;
