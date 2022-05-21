import React from 'react';
// import ReactDOM from "react-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Typekit from 'typekit';
  
const Latestnews = () => {

  // const script = document.createElement('script');

  // script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
  // script.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js";
  // script.src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";

  // script.async = true;



{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>


<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> */}


      //     function fun1(n) {
      //       var name = n.name;
      //         alert(name + " is great");
      //     }
      //     function fun(event) {
      //           var src = event.src;
      //           var name = event.name;
      //           console.log(src);
      //           var content = event.alt;
      //           document.getElementById("a").innerHTML = `<div class="modal fade" id="myModal">
      //   <div class="modal-dialog modal-xl">
      //     <div class="modal-content">
          
            
      //       <div class="modal-header">
      //         <h4 class="modal-title">Modal Heading</h4>
      //         <button type="button" class="close" data-dismiss="modal">&times;</button>
      //       </div>
            
            
      //       <div class="modal-body">
      //         Modal body..
      //         <img src="${src}" alt="">
      //         <br/>
      //         ${content}
      //         <br />
      //         <button class='btn btn-info' name=${name} onclick="fun1(this)">
      //               Check it
      //           </button>

      //       </div>
            
            
      //       <div class="modal-footer">
      //         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      //       </div>
            
      //     </div>
      //   </div>
      // </div>`;
      //     }
      



  return (

<>
<br /><br /><br />
<div class="container">
            <div class="d-lg-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center" >
              <img 
                   src="images/Gmit_Logo.jpg"
                   alt="thumb"
                   height="90px"
                   width="100px"
                  />
                  <div style={{ paddingLeft: "40px",paddingTop: "10px"}}>
                <span class="badge badge-danger mr-4" >Flash news</span>
                <p class="mb-0">
                  GMIT has been ranked 8th amongst all emerging engineering 
                  colleges in India because of its educational excellence and professional infrastructural facilities.
                </p>
                </div>
                <img style={{ paddingTop: "10px"}}
                   src="images/JIS_logo.png"
                   alt="thumb"
                    height="90px"
                    width="100px"
                  />
              </div>
              {/* <div class="d-flex">
                <span class="mr-3 text-danger">Wed, Feburary 10, 2021</span>
                <span class="text-danger">30°C,Baruipur</span>
              </div> */}
            </div>
          </div><br />
<div class="flash-news-banner"><br />
        <div class="content-wrapper">
          <div class="container">
            <div class="row" data-aos="fade-up">
              <div class="col-xl-8 stretch-card grid-margin">
                <div class="position-relative">
                  <img
                   src="images/banner_1.jpg"
                    alt="banner"
                    class="img-fluid"
                  />
                  <div class="banner-content">
                    <div class="badge badge-danger fs-10 font-weight-bold mb-3">
                      global news
                    </div>
                    <h1 class="mb-0"></h1>
                    <h3 class="mb-2">
                      Employability Enhance Traing is being done for better carrier of a Student in such a Pandemic Situation.
                    </h3>
                    <div class="fs-12">

                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 stretch-card grid-margin">
                <div class="card bg-dark text-white">
                  <div class="card-body">
                    <h3>Latest news</h3>

                    <div
                      class="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"
                    >
                      <div class="pr-3">
                        <p>Gargi Memorial Institute of Technology join JIS Group. </p>
                        {/* <div class="fs-12">
                          <span class="mr-2">Photo </span>10 Minutes ago
                        </div> */}
                      </div>
                      <div id="a">

</div>

                      {/* <img class="card-img-top" name="avatar" src="avatar.jpg" alt="Card image" onclick={fun(this)} data-toggle="modal" data-target="#myModal"></img> */}
                      <div class="rotate-img">
                        <img
                         src="images/banner_6.png"
                          alt="thumb"
                          class="img-fluid img-lg"
                        />
                      </div>
                    </div>

                    <div
                      class="d-flex border-bottom-blue pb-4 pt-4 align-items-center justify-content-between"
                    >
                      <div class="pr-3">
                        <p>Academia - Industry Summit - GMIT - CDC in Uluberia. </p>                                                
                        {/* <div class="fs-12">
                          <span class="mr-2">Photo </span>10 Minutes ago
                        </div> */}
                      </div>
                      <div class="rotate-img">
                        <img
                          src="images/banner_7.png"
                          alt="thumb"
                          class="img-fluid img-lg"
                        />
                      </div>
                    </div>

                    <div
                      class="d-flex pt-4 align-items-center justify-content-between"
                    >
                      <div class="pr-3">
                        <p>Technical quiz competition in a Tech fest event in GMIT.</p>
                        {/* <div class="fs-12">
                          <span class="mr-2">Photo </span>10 Minutes ago
                        </div> */}
                      </div>
                      
                      <div class="rotate-img">
                        <img
                          src="images/banner_8.jpg"
                          alt="thumb"
                          class="img-fluid img-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
         </div>
         </div>



         




         </>
  );
    



      
    
  
};
  
export default Latestnews;