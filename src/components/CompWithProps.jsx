import { useState } from 'react';

export const CompWithProps = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Escriba aqui:" />
      <p>User: {text}</p>
    </div>
  );
}



