import React from 'react';
import PropTypes from 'prop-types';
import css from '../../styles/Common.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <button
        className={css.button}
        type="button"
        name={options[0]}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        name={options[1]}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={css.button}
        type="button"
        name={options[2]}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
