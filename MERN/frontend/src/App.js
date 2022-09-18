import './App.css';
import AddMovies from './components/AddMovie';
import Movies from './components/Movies';
import AddMovie from './components/AddMovie';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Movies></Movies>
      <AddMovie></AddMovie>
    </div>
  );
}

export default App;
