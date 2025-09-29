import "./styles/main.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div className="App">
            <Navbar />
            <HomePage />
            <Footer />
        </div>
    );
}

export default App;
