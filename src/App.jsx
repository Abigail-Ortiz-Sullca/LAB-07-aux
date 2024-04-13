import './App.css';
import { List } from './components/List';
import { WrapperList } from './components/WrapperList';

function App() {
  return (
    <>
      <WrapperList>
        <List/>
      </WrapperList>
    </>
  );
}

export default App;
