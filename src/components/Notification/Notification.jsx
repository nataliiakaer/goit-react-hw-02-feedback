import PropTypes from 'prop-types';

const Notification = props => {
  return <p>{props.message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
