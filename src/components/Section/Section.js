import React from 'react';
import PropTypes from 'prop-types';
import css from '../../styles/Common.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={css.text}>{title}</h2>
      {children}
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
