import './App.css';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { personalProjects, workExperiences } from './components/pages/pages';
import { BasePage } from './components/Page/BasePage';
import { Project } from './components/Page/Project';

function App() {
  const experiencePages = workExperiences.map((page: BasePage) =>
    <Route
      key={page.key}
      path={page.link}
      element={<page.Page page={page} />} />
  )

  const projectPages = personalProjects.map((project: Project) =>
    <Route
      key={project.key}
      path={project.link}
      element={<project.Page project={project} />} />
  )

  return (
    <BrowserRouter>
      <div className='center'>
        <Routes>
          <Route path='' element={<HomePage />} />
          {
            [...experiencePages, ...projectPages]
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;