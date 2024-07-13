import './App.css';
import { HeaderBar } from './LandingPage/HeaderBar/HeaderBar';
import MainLayout from './LandingPage/components/MainLayout/MainLayout';

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <MainLayout>
        <h1>Hello World</h1>
        <main>
          <h2>This is the main section</h2>
        </main>
      </MainLayout>
    </div>
  );
}

export default App;
