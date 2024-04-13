import './App.css';
import { Button } from './components/Button'
import { CompWithProps } from './components/CompWithProps'

  function App() {

  const buttonText = "Count: ";

  return (
    <>
      <h1>HOLA DESDE VITE</h1>
      <Button text={buttonText}/>
      <CompWithProps/>
    </>
  );
}

export default App;

