import React, {useState} from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import { Gallery } from "react-grid-gallery";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
import { images } from "../components/images";
import Banner from "../assets/images/aboutus.jpg";
import {  Image, ListGroup } from "react-bootstrap";
const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

const Activities = () =>{
    const [index, setIndex] = useState(-1);
    const handleClick = (index, item) => setIndex(index);

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

        <Footer />
        </>
    )
}

export default Activities;