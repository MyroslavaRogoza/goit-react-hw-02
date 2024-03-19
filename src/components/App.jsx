import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";
import Options from "./Options/Options";

import "./App.css";

function App() {
  const initialValues = { good: 0, neutral: 0, bad: 0 };
  const [testimonialKit, setTestimonialKit] = useState(() => {
    const savedTestimonialKit = window.localStorage.getItem("feedback");
    const parsedTestimonialKit =
      JSON.parse(savedTestimonialKit) ?? initialValues;
    return parsedTestimonialKit;
  });
  const totalFeedback = Object.values(testimonialKit).reduce(
    (acc, currValue) => {
      return acc + currValue;
    },
    0
  );
  const positiveFeedback = Math.round(
    ((testimonialKit.good + testimonialKit.neutral) / totalFeedback) * 100
  );

  console.log(totalFeedback);
  const updateFeedback = (feedbackType) => {
    setTestimonialKit({
      ...testimonialKit,
      [feedbackType]: testimonialKit[feedbackType] + 1,
    });
  };

  const handleResetTestimonialKit = () => {
    setTestimonialKit(initialValues);
  };
  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(testimonialKit));
  }, [testimonialKit]);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleResetTestimonialKit={handleResetTestimonialKit}
      />
      {totalFeedback > 0 ? (
        <Feedback
          testimonialKit={testimonialKit}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
