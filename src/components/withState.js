import { useState } from "react";

export const withState = (Component) => (props) => {
  const [text, setText] = useState("");
  return <Component {...props} text={text} setText={setText} />;
};
