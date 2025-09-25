import "./footer.css";

import gmail from "./../../img/icons/gmail.svg";
import telegram from "./../../img/icons/telegram.svg";
import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="mailto:gtsasuk@gmail.com">
                                <img src={gmail} alt="link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://t.me/gtsasuk">
                                <img src={telegram} alt="link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://www.instagram.com/zhenia_tsasiuk/">
                                <img src={instagram} alt="link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://github.com/gtsasiuk">
                                <img src={gitHub} alt="link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://www.linkedin.com/in/yevhenii-tsasiuk-964a40296/">
                                <img src={linkedIn} alt="link" />
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>Gtsasuk @2024 All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;