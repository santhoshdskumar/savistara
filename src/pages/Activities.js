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
        <div className="container">
            <div className="row py-5">
                <div className="col-12">
                    <p>A range of activities are available to students to choose from during the activity periods that happen at the end of the day. Yoga, Gardening, Science Lab, Baking, Re-cycling, Carpentry, Tabla, Craft, Theatre, Music, Media Club, Bird-watching, Clay-modelling and Composting are some of the activities offered.

Dance and Movement and Art, Craft and Pottery are time-tabled activities that are offered during the week to all children.</p>
                    <Gallery
                        images={images}
                        onClick={handleClick}
                        enableImageSelection={false}
                    />
                    <Lightbox
                        slides={slides}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                    />
                </div>
            </div>

            </div>
        <Footer />
        </>
    )
}

export default Activities;