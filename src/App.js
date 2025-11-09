import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/Rowpost/RowPost';
import { actions, netdlixoriginalposters } from './constants/endpoints';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <RowPost title="NetFlix Originals" urls={netdlixoriginalposters} />
      <RowPost title="Actions" isSmall urls={actions} />
    </div>
  );
}

export default App;
