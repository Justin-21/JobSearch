import './App.css';
import JobCards from './components/JobCards/index.tsx';
import Filter from "./components/Filters/index.tsx"

function App() {
  return (
    <div className="App">
      <JobCards/>
      <Filter/>
    </div>
  );
}

export default App;
