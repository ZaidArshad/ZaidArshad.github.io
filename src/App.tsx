import './App.css';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import projects from './components/HomePage/projects';

function App() {

  return (
    <BrowserRouter>
      <div className='center'>
        <Routes>
          <Route path='' element={<HomePage/>}/>
          {
            projects.map((project) => 
            <Route
              key={project.key}
              path={project.link}
              element={<project.Page project={project}/>}/>
            )
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;