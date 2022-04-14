import './App.css';
import HomePage from './components/sections/HomePage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import projects from './components/sections/projects';

function App() {

  return (
    <BrowserRouter>
      <div className='center'>
        <Routes>
          <Route path='' element={<HomePage/>}/>
          {
            projects.map((project) => 
            <Route path={project.link} element={project.Page !== undefined ? <project.Page/> : project.link + ' does not exist'}/>
            )
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;