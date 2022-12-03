import React, {useEffect,useState} from "react";
import { db } from '../firebase';
import { collection , onSnapshot } from 'firebase/firestore';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {  Image, ListGroup } from "react-bootstrap";
import Banner from "../assets/images/repository.jpg";


const OurPrograms = () =>{
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
                        <h1>Our Programs</h1>
                </div>
            </div>
            <div className="bodyContent py-5">
                    <div className="container">
                        <div className="row fullrow">
                            <div className="col-12">
                            <h3 className="titletag mb-5">Our Programs</h3>
                            </div>
                            <div className="col-4 mb-5">
                                <div className="card">
                                    <div className="card-body">
                                    <h4>Academics:</h4>
                                    <p>There are two levels in the academic framework:</p>
                                    <ul>
                                        <li>Learning as a Life Skill. </li>
                                        <li>Certification training (10th grade)</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mb-5">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>Curriculum</h4>
                                        <h6>NIOS</h6>
                                        <p>As a board, NIOS National Institute of Open Schooling provided a selection of disciplines. Children might choose an unusual combination of subjects because they take tests as private candidates.</p>
                                        <hr />
                                        <h6>IGCSE</h6>
                                        <p>Children who want to pursue their education at overseas universities should take IGCSE tests.
                                        <br />IGCSE board exams are known for their engaging subject matter and creative evaluation methods.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                            <div className="card">
                                    <div className="card-body">
                                        <h4>Art and creativity:</h4>
                                        <p>All artistic endeavours are encouraged here, including singing, dancing, cooking, gardening, reciting, journaling, poetry, drama, playing an instrument, Narrating, creating flower arrangements, making leaf art, and playing sports.</p>
                                        <p>Each child's special talent is recognized and encouraged to grow during our specialized theatre and art clubs.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-5">
                                 <div className="card">
                                    <div className="card-body">
                                        <h4>Physical activities:</h4>
                                        <p>It's crucial to have strength, stamina, coordination, muscle coordination, and the ability to safeguard oneself.</p>
                                        <p>The curriculum includes varied exercises like yoga, dance, tennis, swinging, sliding, throwing a ball, basketball, classic games like hopscotch and lagori, as well as many others.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-5">
                                 <div className="card">
                                    <div className="card-body">
                                        <h4>Development of mental health: </h4>
                                        <p>Mental health is just as vital as physical health.</p>
                                        <p>Classic Indian board games like Saalu Mane Ata, Chaturanga, Pallankuzhi, Ashtapada, and many others are among the various activities we incorporate with kids to enhance their mental health and sense of calm. Additionally, we create and offer solutions to a variety of puzzles and riddles that help kids think critically and develop their problem-solving, strategic, patience, and time- and space-management skills.</p>
                                        <p>Right brain experts are available to aid in a child's IQ and EQ development.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-5">
                                 <div className="card">
                                    <div className="card-body">
                                        <h4>Festivities, Travel:  </h4>
                                        <p>Festival celebrations, A/V theatre events, nature hikes, shopping excursions, police station visits, bank visits, post office visits, market visits, pyjama parties, sporting events, cultural events, talent shows, cooking new recipes, harvesting, summer camps are just a few of the fun things our student engages in.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-5">
                                 <div className="card">
                                    <div className="card-body">
                                        <h4>Assessments:  </h4>
                                        <p>Even here, assessments are taken seriously, but not as a way to judge a child's capabilities, but rather as a roadmap for advancing in assisting a child's overall development rather than just academics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>
        <Footer />
        </>
    )
};

export default OurPrograms;
