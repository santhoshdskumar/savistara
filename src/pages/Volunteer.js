import Header from "../components/Header/Header";
import React, { useState } from 'react';
import Students from "../assets/images/students.jpg";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useForm } from "react-hook-form";
import { Navbar, Image, Nav, Carousel, Input, Modal, Button } from "react-bootstrap";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import Banner from "../assets/images/aboutus.jpg";

const Volunteer = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');
    const [show, setShow] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const data = {
        email:email,
        message:message,
        name:name,
        phonenumber:phone,
    }
      const handleClose = () => setShow(false);
    const submitHandler = (e) => {
        axios.post('https://sheet.best/api/sheets/3186bdff-962c-4c49-99fc-11d8672be084',
        register
        ).then(response => {
            console.log(response);
            if(response.status === 200) {
                setShow(true);
                e.target.reset();
            }
        }).catch(error => {
        });
        }


    return(
     <>
     <Header />
     <div className="innerBody relative">
                    <div className="bannerSection" >
                        <Image src={Banner} alt="Why Savistara" className="w-100"/>

                    </div>
                    <div className="bannerText">
                            <h1>Volunteer</h1>
                            <p>We welcome enthusiastic and skilled individuals</p>
                    </div>
                </div>
     <section className="contact_section ">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>Poorna is a space conducive for experimentation and growth; we welcome enthusiastic and skilled individuals who would be interested in engaging with our students and the larger community.</p>

<p>We usually expect a commitment of one year from volunteers to ensure the contribution and engagement is meaningful for both students and volunteers.</p>

<p>If you are interested in Poorna’s work and would like to get in touch, please fill the form below and we will get back to you.</p>
                </div>
            </div>
        <div className="row">
            <div className="col-md-6">
            <div className="d-flex justify-content-center d-md-block">
                <h2>
                Contact Us
                </h2>
            </div>
            <form action="" onSubmit={handleSubmit(submitHandler)}>
                            <div className="contact_form-container">
                            <div>
                                <div>
                                <Form.Control
                                    placeholder="Name"
                                    aria-label="name"
                                    name="name"
                                    type="text"
                                    onChange={event => setName(event.target.value)}
                                    aria-describedby="basic-addon1"
                                    {...register("name", { required: true, maxLength: 20 })}
                                    />
                                    {errors.names && <p className='error'>Please enter the name</p>}
                                </div>
                                <div>
                                <Form.Control
                                    placeholder="Email"
                                    aria-label="email"
                                    type="email" 
                                    name="email"
                                    onChange={event => setEmail(event.target.value)}
                                    aria-describedby="basic-addon1"
                                    {...register("email", { required: true,
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
                                        maxLength: 20 })}

                                    />
                                    {errors.email && <p className='error'>Please enter email address</p>}

                                </div>
                                <div>
                                <Form.Control
                                    placeholder="Phone Number"
                                    aria-label="phonenumber"
                                    type="number" 
                                    name="phonenumber"
                                    onChange={event => setPhone(event.target.value)}
                                    aria-describedby="basic-addon1"
                                    {...register("phonenumber", { required: true, maxLength: 10 })}

                                    />
                                    {errors.phonenumber && <p className='error'>Please enter phone number</p>}
                                </div>
                                <div>
                                <Form.Control
                                    placeholder="Message"
                                    aria-label="message"
                                    name="message"
                                    type="textarea"
                                    rows={2}
                                    onChange={event => setMessage(event.target.value)}
                                    aria-describedby="basic-addon1"
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
    <Footer />
     </>
    )
}

export default Volunteer;