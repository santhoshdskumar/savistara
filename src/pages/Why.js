import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {  Image, ListGroup } from "react-bootstrap";
import Banner from "../assets/images/why.jpg";

const Why = () => {
    return (
        <>
            <Header />
                <div className="innerBody relative">
                    <div className="bannerSection" >
                        <Image src={Banner} alt="Why Savistara" className="w-100"/>

                    </div>
                    <div className="bannerText">
                            <h1>Why Savistara</h1>
                    </div>
                </div>
                <div className="bodyContent py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                <h3 className="titletag mb-5">Why Savistara</h3>
                                <ListGroup>
                                    <ListGroup.Item>Community and belonging.</ListGroup.Item>
                                    <ListGroup.Item>Ambience of acceptance.</ListGroup.Item>
                                    <ListGroup.Item>Low student - teacher ratio</ListGroup.Item>
                                    <ListGroup.Item>Individual Education Plans and Student Learning Plans among others</ListGroup.Item>
                                    <ListGroup.Item>Effective and innovative pedagogy.</ListGroup.Item>
                                    <ListGroup.Item>Student voice and choice.</ListGroup.Item>
                                    <ListGroup.Item>Strength-based philosophies.</ListGroup.Item>
                                    <ListGroup.Item>Supportive atmosphere.</ListGroup.Item>
                                    <ListGroup.Item>Effective transitions between learning environments and to life beyond grades.</ListGroup.Item>
                                    <ListGroup.Item>Are less formal, fair and kind while remaining firm about rules;</ListGroup.Item>
                                    <ListGroup.Item>Negotiating when needed.</ListGroup.Item>
                                    <ListGroup.Item>Meaningful relationships with teachers.</ListGroup.Item>
                                    <ListGroup.Item>Mentorship relationships with teachers.</ListGroup.Item>
                                    <ListGroup.Item>The ability of teachers to function in different roles in order to meet different student needs.</ListGroup.Item>
                                    <ListGroup.Item>Increasing student self-awareness.</ListGroup.Item>
                                </ListGroup>
                                </div>
                            </div>
                            
                        </div>
                 </div>
            <Footer />
        </>
    )
}

export default Why;