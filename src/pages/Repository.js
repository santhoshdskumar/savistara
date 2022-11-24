import React, {useEffect,useState} from "react";
import { db } from '../firebase';
import { collection , onSnapshot } from 'firebase/firestore';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {  Image, ListGroup } from "react-bootstrap";
import Banner from "../assets/images/repository.jpg";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos = [
    {
        src: `${Banner}`,
        width: 800,
        height: 600,
        id:1
    },
    {
        src: `${Banner}`,
        width: 1600,
        height: 900,
        id:2

    },
    {
        src: `${Banner}`,
        width: 1600,
        height: 900,
        id:3
    },
    {
        src: `${Banner}`,
        width: 1600,
        height: 900,
        id:4

    },
    {
        src: `${Banner}`,
        width: 1600,
        height: 900,
        id:5
    },
    {
        src: `${Banner}`,
        width: 1600,
        height: 900,
        id:6

    },
    {
        src: `${Banner}`,
        width: 1600,
        height: 900,
        id:7
    },
    {
        src: `${Banner}`,
        width: 1600,
        height: 900,
        id:8
    }
];



const Repository = () =>{
    const [repository, setRepository] = useState([]);
    const [index, setIndex] = useState(-1);
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db,'repository'),(snapshot)=>{
            let aboutData = snapshot.docs.map(doc => doc.data());
            console.log(aboutData);
            setRepository(aboutData[0].repository)
        })
        const slides = photos.map((image)=>{
            gallery.push(image);
        })
        console.log(gallery);
    },[]);
    
    return (

        <>
              <Header />
                <div className="innerBody relative">
                    <div className="bannerSection" >
                        <Image src={Banner} alt="Why Savistara" className="w-100"/>

                    </div>
                    <div className="bannerText">
                            <h1>Repository</h1>
                    </div>
                </div>
                <div className="bodyContent py-5">
                        <div className="container">
                            <div className="row fullrow">
                                <div className="col-12">
                                <h3 className="titletag mb-5">Repository</h3>
                                <p>The Repertoire @ Savistara offers the following to every student who is a part of the community –</p>
                                <ListGroup >
                                    {
                                        repository.map((data)=>{
                                            return (
                                                <ListGroup.Item key={`${data}`}>{data}</ListGroup.Item>
                                            )
                                        })
                                    }

                                </ListGroup>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">

                                </div>
                            </div>                                
                        </div>
                 </div>
                <Footer />
        </>
    )
};

export default Repository;
