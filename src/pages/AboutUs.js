import React, {useEffect,useState} from "react";
import { db } from '../firebase';
import { collection , onSnapshot } from 'firebase/firestore';
import Header from "../components/Header/Header";
import {  Image, ListGroup } from "react-bootstrap";
import Banner from "../assets/images/aboutus.jpg";
import ImageOne from "../assets/images/aboutone.jpg";
import ImageTwo from "../assets/images/objectives.jpg";
import ImageThree from "../assets/images/methodology.jpeg";
import Footer from "../components/Footer/Footer";


const AboutUs = () => {
    const [aboutus, setAbout] = useState();
    const [methodology, setMethodology] = useState();
    const [objectives, setObjectives] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db,'aboutus'),(snapshot)=>{
            let aboutData = snapshot.docs.map(doc => doc.data());
            setAbout(aboutData[0].about)
            setMethodology(aboutData[0].methodology)
            setObjectives(aboutData[0].objectives)
        })
    },[]);
    console.log(objectives);
    return(
        <>
            <Header />
                <div className="innerBody relative">
                    <div className="bannerSection" >
                        <Image src={Banner} alt="Why Savistara" className="w-100"/>

                    </div>
                    <div className="bannerText">
                            <h1>ABOUT US</h1>
                    </div>
                </div>
                <div className="bodyContent py-5 mt-5">
                        <div className="container">
                            <div className="row fullrow">
                                <div className="col-md-6 col-12 col-lg-6 align-self-center">
                                <h3 className="titletag ">About Us</h3>
                                {/* <p>Savistara is intended to be an intriguing setting where children are respected for their unique emotional, physical, intellectual, and spiritual qualities. a supportive setting where mentoring takes precedence over "schooling." Mentors serve as the students' confidants, teachers, and motivators and always encourages independent thought. The qualities that today's game-changers will need, such as self-awareness, confidence, unpretentiousness, and fearlessness, are emphasized in children. At Savistara, we strive to educate children how to accept themselves for who they are, feel good about themselves, learn to control their emotions, and develop the confidence to confront challenges.</p> */}
                                {aboutus}
                                </div>
                                <div className="col-md-6 col-12 col-lg-6">
                                    <Image src={ImageOne} alt="About Savistara" className="w-100"/>
                                </div>
                            </div>

                            <div className="row fullrow">
                                <div className="col-md-6 col-12 col-lg-6">
                                    <Image src={ImageTwo} alt="About Savistara" className="w-100"/>
                                </div>
                                <div className="col-md-6 col-12 col-lg-6  align-self-center">
                                <h3 className="titletag ">Our Objectives</h3>
                                <ul>
                                    {
                                        objectives.map((data)=>{
                                            return (
                                                <li>{data}</li>
                                            )
                                    })
                                    }
                              
                                </ul>
                                </div>
                            </div>

                            <div className="row fullrow">
                                <div className="col-md-6 col-12 col-lg-6 align-self-center">
                                <h3 className="titletag ">Methodology</h3>
                                <p> {methodology}
                                </p>
                                </div>
                                <div className="col-md-6 col-12 col-lg-6">
                                    <Image src={ImageThree} alt="About Savistara" className="w-100"/>
                                </div>
                            </div>
                        </div>
                </div>
 
            <Footer />
        </>
    )
}

export default AboutUs;