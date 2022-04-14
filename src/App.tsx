import './App.css';
import HomePage from './components/sections/HomePage';
import ZLogo from './components/KeyCaps/ZCap';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className='center'>
        <Routes>
          <Route path='' element={<HomePage/>}/>
          <Route path='test' element={<ZLogo/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
