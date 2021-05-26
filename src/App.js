import Modal from "./components/Modal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainStart from "./components/MainStart";

import "./assets/styles/Reset.scss";
import "./assets/styles/App.scss";
import MainPlaying from "./components/MainPlaying";

function App() {
  return (
    <div className="App">
      <Header />
      <MainStart />
      {/* <MainPlaying /> */}
      <Modal />
      <Footer />
    </div>
  );
}

export default App;
