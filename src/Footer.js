import React from "react";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  Box,
  Container,
  Row,
  FooterLink,
  Heading,
} from "./Footerstyle";
import Iframe from 'react-iframe';
  
const Footer = () => {
  return (
     <Box>
      {/* <h1 style={{ color: "#789de9",
                   fontStyle: "italic", 
                   textAlign: "center",                              
                   marginTop: "-50px" }}>
        The Times of Gmit
      </h1> */}
      <Container style={{marginTop: "-50px" }}>
        <Row>
          <div class="col-sm-24">
            <Heading style={{ fontStyle: "italic"}}>Our Address</Heading>
           
            <p style={{ color: "#cae064", 
                         }}>College Address : Gargi Memorial Institute of Technology, Balarampur, Mouza Beralia, Baruipur, Kolkata - 700144</p><br />
				    <p style={{ color: "white", 
                         }}>City Office: 3, Suren Tagore Road, Kolkata - 700 019,  Phone:+91 33 2440-6245,+91 33 2460-5124</p><br /><br /><br />

         </div>
         <div class="col-sm-12">
            <Heading style={{ fontStyle: "italic"}}>Our Location</Heading>
            <center><Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.3533355205604!
				  2d88.43875281478833!3d22.37803348528326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
				  1s0x3a026d0097533aed%3A0xe18407a46f2e97f6!2sGargi%20Memorial%20Institute%20of%20Technology!
				  5e0!3m2!1sen!2sin!4v1581501286876!5m2!1sen!2sin" width="200px" height="250px" frameborder="0"
           ></Iframe>"</center>
           </div>
      <div class="col-sm-12">
           
            <Heading style={{ color: "white",fontStyle: "italic"}}>Recent Posts</Heading>
            <div class="row">
              <div class="col-sm-12">
                <div class="footer-border-bottom pb-2">
                  <div class="row">
                    <div class="col-3">
                    <img  src="images/banner_8.jpg" alt="thumb" class="img-fluid"  />
                    </div>
                    <div class="col-9">
                      <h6 class="font-weight-600" style={{ color: "white",}}>
                        Technical quiz competition in a Tech fest event in GMIT.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="footer-border-bottom pb-2 pt-2">
                  <div class="row">
                    <div class="col-3">
                    <img  src="images/banner_5.jpg" alt="thumb" class="img-fluid"  />
                    </div>
                    <div class="col-9">
                      <h6 class="font-weight-600" style={{ color: "white",}}>
                        Gargi Memorial Institute of Technology join JIS Group 
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div>
                  <div class="row">
                    <div class="col-3">
                    <img  src="images/banner_7.png" alt="thumb" class="img-fluid"  />
                    </div>
                    <div class="col-9">
                      <h6 class="font-weight-600 mb-3" style={{ color: "white",}}>
                        Academia - Industry Summit - GMIT - CDC in Uluberia.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
         
          <div class="col-sm-10">
            <Heading style={{ fontStyle: "italic"}}>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
              <br />  <br />
              <img  src="images/Gmit_log.png" alt="thumb" class="img-fluid"  />
            </FooterLink>
         </div>
        </Row>
      </Container>
      <div class="footer-bottom">
 <div class="container">
   <div class="row">
     <div class="col-sm-12">
       <div class="d-sm-flex justify-content-between align-items-center">
         <div class="fs-14 font-weight-600 text-white">
           © 2020 @ <a  target="_blank" class="text-white"> GMIT TIME</a>. All rights reserved.
         </div>
         <div class="fs-14 font-weight-600 text-white">
           Handcrafted by <a  target="_blank" class="text-white">  GMIT TIME</a>
         </div>
         <div class="fs-14 font-weight-600 text-white">
           Developed by <a  target="_blank" class="text-white"> Rafik Mondal</a>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
</Box> 
 


  );
};
export default Footer;