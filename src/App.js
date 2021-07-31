import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, deCrement } from './action/index'

function App() {
  const mystate = useSelector(state => state.changeNumber)
  const disPatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
         <div className="quantity">
           <a className="btn-cm decrement" onClick={() => disPatch(deCrement())} title="decrement"><span>-</span></a>
           <input type="number" name="quantity" value={mystate} min="0" max="10" className="values"/>
           <a className="btn-cm increment" onClick={() => disPatch(incNumber(5))} title="increment"><span>+</span></a>
         </div>
      </header>
    </div>
  );
}

export default App;
