import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Not long to go...</h2>
      <p>
        Your opinion is very important, soon you will receive a 10% coupon
        discount for your next purchase.
      </p>
      <p>To complete your assessment, click the Submit button below.</p>
      <h3>Here is your review summary {data.name}:</h3>
      <p className="review-data">
        <span>Satisfaction with the product:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comment:</span> {data.comment}
      </p>
    </div>
  );
};

export default Thanks;