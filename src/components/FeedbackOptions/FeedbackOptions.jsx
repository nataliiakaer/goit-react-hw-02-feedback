import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      key={option}
      type="button"
      name={option}
      className="btnFeedback"
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  handleOnClick: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;
