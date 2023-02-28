import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";

function App() {
  return (
    <div className="bodyApp">
      <div>
        <Header />
        <Hero heroTitle="Random links for a good laugh!" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
