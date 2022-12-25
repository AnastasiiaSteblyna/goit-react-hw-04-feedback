import React from 'react';
import PropTypes from 'prop-types';
import css from '../../styles/Common.module.css';

const FeedbackOptions = ({ good, neutral, bad, onLeaveFeedback }) => {
  return (
    <div>
      <button
        className={css.button}
        type="button"
        name="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={css.button}
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
