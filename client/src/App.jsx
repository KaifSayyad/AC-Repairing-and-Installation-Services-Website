import "./App.css";
import CardRow from "./components/CardRow";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <CardRow />
      <Footer/>
    </>
  );
}

export default App;
