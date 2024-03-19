import css from "./Feedback.module.css";

const Feedback = ({ testimonialKit, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={css.testimonialKitContainer}>
      <li>Good: {testimonialKit.good}</li>
      <li>Neutral: {testimonialKit.neutral}</li>
      <li>Bad: {testimonialKit.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
