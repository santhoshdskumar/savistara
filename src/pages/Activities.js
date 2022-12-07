import React, {useState} from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { images } from "../components/images";
import Banner from "../assets/images/aboutus.jpg";
import {  Image, ListGroup } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

const Activities = () =>{

    return (
        <>
        <Header />
        <div className="innerBody relative">
                    <div className="bannerSection" >
                        <Image src={Banner} alt="Why Savistara" className="w-100"/>

                    </div>
                    <div className="bannerText">
                            <h1>Our Activities</h1>
                    </div>
                </div>

                    <div className="bodySection py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="titletag ">Our Activites</h3>
                                    <Carousel fade className="pt-3">
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Banner}
                                            alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Banner}
                                            alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src={Banner}
                                            alt="Third slide"
                                            />
                                        </Carousel.Item>
                                        </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
        <Footer />
        </>
    )
}

export default Activities;