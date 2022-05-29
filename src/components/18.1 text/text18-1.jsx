import React, { useState } from "react";

const LongText = ({ content, limit }) => {
  const [showAll, setShowAll] = useState(false);
  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);
  if (content.length <= limit) {
    // there is nothing more to show
    return (
      <div>
        <h1>{content}</h1>
      </div>
    );
  }
  if (showAll) {
    // We show the extended text and a link to reduce it
    return (
      <div>
        <h1> {content}</h1>
        <button onClick={showLess}>Read less</button>
      </div>
    );
  }
  // In the final case, we show a text with ellipsis and a `Read more` button
  const toShow = content.substring(0, limit) + "...";
  return (
    <div>
      <h1> {toShow}</h1>
      <button onClick={showMore}>Read more</button>
    </div>
  );
};
const Exercise18_1 = () => (
  <div>
    <LongText
      content="Create a component that takes 2 props. A text as a string 
        and a maximum length as an integer.
        If the text is longer that the maximum length hide the 
        remaining text.
        You are able to read the rest of the text by clicking on read 
        more and you are able to hide the text by clicking on show 
        less.
        Use the useState hook to control when it is hidden."
      limit={50}
    />
  </div>
);

export default Exercise18_1;
