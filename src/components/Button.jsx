import { useState } from "react";

export const Button = props => {
  const { text } = props;

  const [count, setCount] = useState(0);

  function handlerButton() {
    setCount(count + 1);
  }

  return (
    <button onClick={ handlerButton }>
      {text}{ count }
    </button>
  );
}
