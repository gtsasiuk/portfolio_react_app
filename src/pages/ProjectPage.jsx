import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import img from "./../img/projects/01-big.jpg";

const ProjectPage = () => {
    return (  
        <main className="section">
        <div className="container">
            <div className="project-details">
                <h1 className="title-1">Gaming streaming portal</h1>
                <img src={img} alt="Gaming streaming portal" className="project-details__cover" />
                <div className="project-details__desc">
                    <p>Skills: React, Note.js, MongoDB</p>
                </div>
                <BtnGitHub link="https://github.com" />
            </div>
        </div>
    </main>
    );
}
 
export default ProjectPage;