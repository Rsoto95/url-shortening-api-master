import "./App.css";
import Header from "./Components/header/header";
import Hero from "./Components/Hero-Banner/hero-banner";
import ShortenApp from "./Components/shortenApp/shortenApp";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ShortenApp/>
    </div>
  );
}

export default App;
