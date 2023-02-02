import React from "react";
import { Link } from "react-router-dom"
const Footer = () => {
    return (

        <div>
            <div className=" socialMediaContainerFooter">

                <section className=" socialMediaSection">

                    <Link to="#" className="btn btn-outline-primary btn-floating m-1" role="button"
                    > <i className="fab fa-facebook-f"></i
                    ></Link>
                    <Link to="#" className="btn btn-outline-danger btn-floating m-1" role="button"
                    ><i className="fab fa-youtube"></i
                    ></Link>

                    <Link to="#" className="btn btn-outline-warning btn-floating m-1" role="button"
                    ><i className="fab fa-instagram"></i
                    ></Link>

                </section>
            </div>
            <div className="  copyrightBand">
                <div className="row">
                    <div className="col">
                        <p>©2023 Entrepreneur exceptionnel. All rights reserved</p>
                    </div>

                </div>
            </div>
        </div>


    );
}
export default Footer;