import About from './components/about/About';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import ResponsiveHeader from './components/responsiveHerder/ResponsiveHeader';
import Contact from './components/contact/Contact'
import MySkills from './components/skills/MySkills';
import './App.css';


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
        <MySkills/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
