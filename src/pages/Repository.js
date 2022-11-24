import React, {useEffect,useState} from "react";
import { db } from '../firebase';
import { collection , onSnapshot } from 'firebase/firestore';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {  Image, ListGroup } from "react-bootstrap";
import Banner from "../assets/images/repository.jpg";


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
