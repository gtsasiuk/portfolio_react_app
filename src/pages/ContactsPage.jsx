const ContactsPage = () => {
    return (  
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Locations</h2>
                        <p>Chernivtsi, Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / Viber</h2>
                        <p><a href="tel:+380986020246">+38 (098)-602-02-46</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:gtsasuk@gmail.com">gtsasuk@gmail.com</a></p>
                    </li>
                </ul>            
            </div>
        </main>
    );
}
 
export default ContactsPage;