import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <footer style={{
        textAlign: 'center',
        padding: '2.5rem',
        color: 'var(--secondary-color)',
        borderTop: '1px solid var(--border-color)',
        fontSize: '0.9rem'
      }}>
        <p>&copy; {new Date().getFullYear()} 俞建名 個人作品集。 Made with React.</p>
      </footer>
    </main>
  );
}

export default App;
