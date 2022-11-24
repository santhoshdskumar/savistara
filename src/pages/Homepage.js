import React, { useState } from 'react';
import Header from "../components/Header/Header";
import Hero from "../assets/images/hero.png";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import About from "../assets/images/about.png";
import Admission from "../assets/images/admission.png";
import Why from "../assets/images/why.png";
import Determine from "../assets/images/determine.png";
import Students from "../assets/images/students.jpg";
import { Navbar, Image, Nav, Carousel, Input, Modal, Button } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { useForm } from "react-hook-form";


const Homepage = () => {
    const [names,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');
    const [show, setShow] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState,
        setError,
        formState: { isSubmitSuccessful, errors  }
    } = useForm({});
    const handleClose = () => setShow(false);
    const onSubmit = (data, e) => {
        axios.post('https://sheet.best/api/sheets/3186bdff-962c-4c49-99fc-11d8672be084',
        data
        ).then(response => {
            console.log(response);
            if(response.status === 200) {
                setShow(true);
                e.target.reset();
            }
        }).catch(error => {
        });
    };

    const onError = (errors, e) => console.log(errors, e);



      

    return(
        <>
        <div className="top_container">
        <Header />
        <section className="hero_section ">
            <div className="hero-container container">
            <div className="hero_detail-box">
                <h1>
                We are all important, we are a team with team spirit. 
                </h1>
                <p>
                Savistara is an alternative learning Centre for children located in Bengaluru and is built in an area with no traffic, in order to ensure the children's safety and to promote both indoor and outdoor learning. 
                </p>
                <div className="hero_btn-continer">
                <a href="" className="call_to-btn btn_white-border">
                    Read More
                </a>
                </div>
            </div>
            <div className="hero_img-container">
                <Image src={Hero} alt="sss" />
            </div>
            </div>
        </section>
        </div>
        <div className="common_style">
        <section className="about_section">
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <div className="about_img-container">
                <Image src={About} alt="" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="about_detail-box">
                <h3>
                    About our School
                </h3>
                <p>
                Savistara is intended to be an intriguing setting where children are respected for their unique emotional, physical, intellectual, and spiritual qualities. a supportive setting where mentoring takes precedence over "schooling." Mentors serve as the students' confidants, teachers, and motivators and always encourages independent thought. 
                </p>
                <div className="">
                    <a href="/about" className="call_to-btn btn_white-border">
                    Read More
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>


        <section className="admission_section">
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <div className="admission_detail-box">
                <h3>
                    Admission open
                </h3>
                <p>
                If you and your child(ren) would like to be part of the Savistara family please fill this form and email it to us at admissions@savistara.in.<br />
We will get in touch with you about the admission process.
                </p>
                <div className="">
                    <a href="" className="call_to-btn btn_white-border">
                    Read More
                    </a>
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="admission_img-container">
                <Image src={Admission} alt="" />
                </div>
            </div>
            </div>
        </div>
        </section>




        <section className="why_section">
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <div className="why_img-container">
                <Image src={Why} alt="" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="why_detail-box">
                <h3>
                    Why learn on Savistara
                </h3>
                <p>
                Savistara is an alternative learning Centre for children located in Bengaluru and is built in an area with no traffic, in order to ensure the children's safety and to promote both indoor and outdoor learning.<br /> 
                It is an ideal environment for kids to develop their skills, ability to think, learn etiquette beyond the text books.
                </p>
                <div className="">
                    <a href="" className="call_to-btn btn_white-border">
                    Read More
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>


        <section className="determine_section">
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <div className="determine_detail-box">
                <h3>
                    Datermine the right for you
                </h3>
                <p>
                Savistara was established with an intention of providing a board - based, hospitable, nurturing and stimulating environment. Every day, Savistara extends a warm welcome to students who are interested in alternative education. Here, learning is supported by concepts that include group activities that are communicative, physical, social, emotional, intellectual, and cultural.
                </p>
                <div className="">
                    <a href="" className="call_to-btn btn_white-border">
                    Read More
                    </a>
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="determine_img-container">
                <Image src={Determine} alt="" />
                </div>
            </div>
            </div>
        </div>
        </section>

        </div>


        <section className="contact_section ">
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <div className="d-flex justify-content-center d-md-block">
                    <h2>
                    Contact Us
                    </h2>
                </div>
                <form action="" onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className="contact_form-container">
                    <div>
                        <div>
                        <Form.Control
                        type="text"
                            {...register("name", { required: true })} placeholder="Name"   
                            />
                             {errors.name && <p className='error'>Nsme is required.</p>}
                        </div>
                        <div>
                        <Form.Control
                        type="number"
                            {...register("phonenumber", { required: true })} placeholder="Phone Number"   
                            />
                             {errors.phonenumber && <p className='error'>Phone Number is required.</p>}
                        </div>
                        <div>
                        <Form.Control
                        type="email"
                        {...register("email", { required: true })} placeholder="Email"   
                            />
                             {errors.email && <p className='error'>Email is required.</p>}
                        </div>
                        <div>
                        <Form.Control
                        type="text"
                        {...register("message", { required: false })} placeholder="Message"  
                            />
                        </div>
                        
                        <div className="mt-5">
                        <button type="submit">
                            send
                        </button>
                        </div>
                    </div>
                    </div>

                </form>
                </div>
                <div className="col-md-6">
                <div className="contact_img-box">
                    <Image src={Students} alt="" />
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="client_section layout_padding">
            <h2 className="">
            Reach Savistara Gurukul
            </h2>
            <div className="container">
                    <div className='row'>
                                <div className='col-md-12'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4596261769425!2d77.56387171350204!3d13.070030990791363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1976e475e7ab%3A0xae383983ffca6124!2sSavistara%20a%20Gurukul!5e0!3m2!1sen!2sin!4v1668580158043!5m2!1sen!2sin" width="100%" height="450"  loading="lazy"></iframe>
                                </div>
                    </div>            
            </div>
        </section>

        <Modal show={show}  onClick={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you</Modal.Title>
        </Modal.Header>
        <Modal.Body>We will call get back with you the details, provided with us</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <Footer />
        </>
    )
}

export default Homepage;