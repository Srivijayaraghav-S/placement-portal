import './App.css';
import Home from './routes/Home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-main'>
  
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/mim" element={<MimicScreen />} /> */}
          
        </Routes>
      
    </div>
  );
}

export default App;