import React from "react";
import './footer.style.scss';

function Footer() {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer">
            <p className="footer p">copyright ⓒ {year} </p>
        </div>

    )
}

export default Footer;