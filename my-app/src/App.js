import './App.css';
import Navbar from './navbar';
import Titlehead from './titlehead';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Titlehead />
        
      </header>
      <main>
      <div className="App-todo">
        <h3>to do for site</h3>
        <ul>
          <li>set up css design</li>
          <li>set up departments of info(about, projects, contact, etc)</li>
          <li>put actual picture of myself</li>
          <li>replace icons from react ones</li>
          <li>have fun and learn!</li>
        </ul>
        </div>
        <div id="about">
          <br/>
          <p>this is where i would give a brief paragraph about myself</p>
          <br/>
        </div>
        <div id="portfolio">
          <br/>
            <p>this is where i would talk about my projects</p>
          <br/>
        </div>
      </main>
    </div>
  );
}

export default App;
