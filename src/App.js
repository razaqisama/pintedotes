import './tailwind.css';
import Navbar from './components/Navbar'
import Home from './views/Home'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
