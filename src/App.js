import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import ResponsiveHeader from './components/responsiveHerder/ResponsiveHeader';
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="App">
      <header>
      <ResponsiveHeader/>
      </header>
      <main>
        <Home/>
        <About/>
        <Portfolio/>
        <Skills/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
