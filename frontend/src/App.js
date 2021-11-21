import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar nombre="Javier" apellido="Triana"/>
      <h1>Bienvenidos a React!</h1>
    </div>
  );
}

export default App;
