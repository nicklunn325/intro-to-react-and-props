import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld.js'
import Greeting from './Greeting.js'
import LinkContainer from './LinkContainer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>npx create-react-app app-name</h3>
        <HelloWorld/>
        <Greeting x={22} name="Valton" />
        <Greeting name="Emmanuel"/>
        <LinkContainer name="nick" age={29}/>
        
      </header>
    </div>
  );
}


export default App;
