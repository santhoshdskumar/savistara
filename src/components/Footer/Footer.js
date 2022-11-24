import { Navbar, Image, Nav, Carousel, Input } from "react-bootstrap";
import Facebook from "../../assets/images/fb.png";
import Twitter from "../../assets/images/twitter.png";
import Instagram from "../../assets/images/instagram.png";


const Footer = () => {
    return (
      <>
     <section className="info_section layout_padding-top">
        <div className="info_logo-box">
          <h2>
              Savistara A GURUKUL
          </h2>
        </div>
          <div className="container layout_padding2">
            <div className="row">
              <div className="col-md-5">
                <h5>
                    About Us                                                                             
                </h5>
               <p className="w-80">
               Savistara is an alternative learning Centre for children located in Bengaluru and is built in an area with no traffic, in order to ensure the children's safety and to promote both indoor and outdoor learning. 
               </p>
              </div>
              <div className="col-md-3">
                <h5>
                    Useful Link 
                </h5>
                <ul>
                  <li>
                    <a href="">
                       About Us
                    </a>
                  </li>
                  <li>
                   <a href="">
                     Join Savistara
                   </a>
                  </li>
                  <li>
                    <a href="">
                       Why Savistara
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>
                    Contact Us
                </h5>
                <p>
                #23, Savistara, Ground floor <br />
                1st Cross Road 
                APC Layout <br />
                Bengaluru, Karnataka 560097, <br />
                India
                </p>
              </div>
            </div>
          </div>
          <div className="container">
              <div className="social_container">
                  <div className="social-box">
                    <a href="">
                      <Image src={Facebook}lt="" />
                    </a>
      
                    <a href="">
                      <Image src={Twitter} alt="" />
                    </a>
                    <a href="">
                      <Image src={Instagram} alt="" />
                    </a>
                  </div>
                </div>
          </div>
        </section>
        <section className="container-fluid footer_section">
          <p>
            Copyright &copy; 2022 All Rights Reserved By
            <a href="https://html.design/"> Savistara</a>
          </p>
        </section>
      </>

    )
}

export default Footer;