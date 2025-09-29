import Header from "./../components/header/Header";

const HomePage = () => {
    return ( 
        <>
        <Header />
        <main className="section">
            <div className="container">
                <h1 className="title-1">Skills</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>JavaScript, React, HTML, CSS, CMS OpenCart</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>Java, Spring, Hibernate, Php, C/C++, MySQL, MongoDB</p>
                    </li>
                </ul>
            </div>
        </main>
        </>
    );
}
 
export default HomePage;