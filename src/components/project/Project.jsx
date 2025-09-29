import "./project.css"

const Project = ({title, img}) => {
    return (  
        <li className="project">
            <a href="./project-pages/project-page01.html">
                <img src={img} alt={title} className="project__img" />
                <h3 className="project__title">{title}</h3>
            </a>
        </li>
    );
}
 
export default Project;