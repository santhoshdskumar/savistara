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
            <div className="bodyContent">

            </div>
        <Footer />
        </>
    )
}
export default Teach;