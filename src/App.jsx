import "./styles/main.css";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <main class="section">
                <div class="container">
                    <h1 class="title-1">Skills</h1>
                    <ul class="content-list">
                        <li class="content-list__item">
                            <h2 class="title-2">Frontend</h2>
                            <p>JavaScript, React, HTML, CSS, CMS OpenCart</p>
                        </li>
                        <li class="content-list__item">
                            <h2 class="title-2">Backend</h2>
                            <p>Java, Spring, Hibernate, Php, C/C++, MySQL, MongoDB</p>
                        </li>
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
