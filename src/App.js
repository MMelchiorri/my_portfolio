import logo from './logo.svg';
import './App.css';
import './Component/Header'
import Header from './Component/Header';
import Card from './Component/Card'

function App() {
  return (
    <div className="App">

      <Header></Header>

      <div className='cards'>

        <Card></Card>
        <Card></Card>
        <Card></Card>

      </div>



    </div>
  );
}

export default App;
