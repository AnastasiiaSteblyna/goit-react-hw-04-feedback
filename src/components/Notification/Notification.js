import React from 'react';
import PropTypes from 'prop-types';
import css from '../../styles/Common.module.css';

const Notification = ({ message }) => {
  return (
    <>
      <h3 className={css.notify}>{message}</h3>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
