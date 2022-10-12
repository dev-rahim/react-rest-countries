import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1>welcome to React</h1>
      <Countries></Countries>
    </div>
  );
}

export default App;
