import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './common/types/index'
import { NewPage } from './components/new-page/index'
import { LandingPage } from './components/landing-page/index'
function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.NEW} element={<NewPage />} />
        <Route path={ROUTES.HOME} element={<LandingPage/>}/>
      </Routes>
    </>
  );
}

export default App;
