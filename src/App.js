import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage";
import { AppProvider } from "./context/AppProvider";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppProvider>
        <HomePage />
      </AppProvider>
    </div>
  );
}

export default App;
