import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/Rowpost/RowPost';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
