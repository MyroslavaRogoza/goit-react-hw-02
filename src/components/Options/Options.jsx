import css from "./Options.module.css";

const Options = ({
  updateFeedback,
  totalFeedback,
  handleResetTestimonialKit,
}) => {
  return (
    <div className={css.optionsContainer}>
      <button
        className={css.optionsBtn}
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={css.optionsBtn}
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.optionsBtn}
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={handleResetTestimonialKit} className={css.resetBtn}>Reset</button>
      )}
    </div>
  );
};

export default Options;
