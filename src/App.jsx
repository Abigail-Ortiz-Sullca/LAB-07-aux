import './App.css';
import { List } from './components/List';
import { WapperList} from './components/WrapperLis';

function App() {
  return (
    <>
      <WapperList>
        <List/>
      </WapperList>
    </>
  )
}
export default App