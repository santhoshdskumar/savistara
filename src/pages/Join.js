import React from "react";
import {  Image, ListGroup } from "react-bootstrap";
import Banner from "../assets/images/aboutus.jpg";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Document from "../assets/enquiry-form_admission.doc";

const Study = () => {
    return (
        <>
        <Header />
        <div className="innerBody relative">
                    <div className="bannerSection" >
                        <Image src={Banner} alt="Why Savistara" className="w-100"/>

                    </div>
                    <div className="bannerText">
                            <h1>Join Savistara</h1>
                            <p>Be a part of the Savistara A Gurukul</p>
                    </div>
        </div>

        <div className="bodyContent py-5 mt-5">
            <div className="container">
            <div className="row fullrow">
                    <div className="col-md-12 col-12 col-lg-12 ">
                    <h3 className="titletag ">Our Team</h3>
                    <p> Savistara has a unique team of mentors (teachers) who love, innovate, and use spontaneous teaching methods. They are experts at relating the content in textbooks to real-world situations. Consider learning each child's aim and to always be ready to assist them in achieving it. Additionally, caregivers are incredibly loving, patient, and fun-loving, and they attend to each child's needs with great care.</p>
                    </div>
                </div>

                <div className="row fullrow">
                    <div className="col-md-12 col-12 col-lg-12 ">
                    <h3 className="titletag ">Join Us</h3>
                    <p></p>If you and your child(ren) would like to be part of the Savistara A Gurukul family please fill this <a href={Document}>form</a> and email it to us at <a href="mailto:savistara@gmail.com" >savistara@gmail.com</a>.
                    We will get in touch with you about the admission process.
                    </div>
                </div>


            </div>
                </div>

        <Footer />
        </>
    )
}

export default Study;