import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {  Image, ListGroup } from "react-bootstrap";
import Banner from "../assets/images/aboutus.jpg";

const Teach =()=>{
    return (
        <>
        <Header />
        <div className="innerBody relative">
                    <div className="bannerSection" >
                        <Image src={Banner} alt="Why Savistara" className="w-100"/>

                    </div>
                    <div className="bannerText">
                            <h1>Educate Savistara Children</h1>
                            <p>Looking for enthusiastic and creative individuals</p>
                    </div>
                </div>
            <div className="bodyContent py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="titletag">Join Our Team</h3>
                            <p>We are looking for enthusiastic and creative individuals interested in holistic education who can contribute to our community.
If you are interested in Poorna’s work and would like to get in touch, please reach out us <a href="mail-to:savistara.edu@gmail.com" target="_blank">savistara.edu@gmail.com.</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}
export default Teach;