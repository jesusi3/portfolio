
import AboutMe from '../components/AboutMe/AboutMe';
import ProfilePic from '../components/ProfilePic/ProfilePic';
import Skills from '../components/Skills/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>portfolio</h1>
      </header>
      <AboutMe />
      <ProfilePic />
      <Skills />
    </div>
  );
}

export default App;
