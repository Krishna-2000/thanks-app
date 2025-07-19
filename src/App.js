import './App.css';
import { Route, Routes } from 'react-router-dom';
import Start from './components/Start/Start';
import Game from './components/Game/Game';
import Message from './components/Message/Message';
// import FadeTransition from './components/FadeTransition/FadeTransition';

function App() {
  // const location = useLocation();
  return (
    // <FadeTransition trigger={location.pathname}>
    <div className="App">
      <Routes>
        <Route path="/" element={<h2>Welcome Home</h2>} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/contact" element={<h2>Contact Page</h2>} />
        <Route path="/start" element={<Start/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/message" element={<Message/>}/>
      </Routes>
    </div>
    // </FadeTransition>
  );
}

export default App;
