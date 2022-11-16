import './App.css';
import {Navbar, Blog, Footer} from './components/index'

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Blog />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
