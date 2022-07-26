import logo from './logo.svg';
import './App.css';

function App() {
  let input=(<input type="text" placeholder="name"/>)
  return (
    <div className="App">
    <div classname="awesome" style={{border:'1px',solid:'red'}}>
<form>
<label for="name">enter your name :</label>
{input}
</form>
</div>
<p> enter your html here </p>

    </div>
  );
}

export default App;
