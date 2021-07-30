import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
         <div className="quantity">
           <a className="btn-cm decrement" title="decrement"><span>-</span></a>
           <input type="number" name="quantity" value="0" min="0" max="10" className="values"/>
           <a className="btn-cm increment" title="increment"><span>+</span></a>
         </div>
      </header>
    </div>
  );
}

export default App;
