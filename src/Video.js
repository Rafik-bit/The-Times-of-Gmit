import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player";

const Video = () => {
  return (
<div class="flash-news-banner">
<br />
<div class="container" data-aos="fade-up">
              <div class="col-sm-12 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-lg-8">
                        <div class="card-title">
                          Video
                        </div>
                        <div class="row">
                          <div class="col-sm-6 grid-margin">
                            <div class="position-relative">
                              <div class="rotate-img">
                                {/* <img
                                   src="images/banner_11.jpg"
                                  alt="thumb"
                                  class="img-fluid"
                                /> */}
                               <ReactPlayer
                            url="https://www.youtube.com/watch?v=A80ILiE9EKg&t=10s"
                            width="100%"
                            height="200px"  />
                              </div> <br />
                              <div class="badge-positioned w-90">
                                <div
                                  class="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    class="badge badge-danger font-weight-bold"
                                    >DKB CUP @ GMIT</span > 
                                  
                                </div><br />
                              </div>
                            </div>
                          </div>
                         <br />
                          <div class="col-sm-6 grid-margin">
                            <div class="position-relative">
                              <div class="rotate-img">
                                {/* <img
                                   src="images/banner_12.jpg"
                                  alt="thumb"
                                  class="img-fluid"
                                /> */}
                               <ReactPlayer
                            url="https://www.youtube.com/watch?v=azXHfHp9ah0"                         
                            width="100%"
                            height="200px"    />
                              </div> <br />
                              <div class="badge-positioned w-90">
                                <div
                                  class="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    class="badge badge-danger font-weight-bold"
                                    >Campus life @GMIT</span
                                  >
                                 
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-6 grid-margin">
                            <div class="position-relative">
                              <div class="rotate-img">
                              <ReactPlayer
                            url="https://www.youtube.com/watch?v=ab8L_Yfd6EI&list=PLUZ1R8FdWPEWY2Dx9O-ee_QsvpaV1lu3P&index=10"
                            width="100%"
                            height="200px"  />
                              </div> <br />
                              <div class="badge-positioned w-90">
                                <div
                                  class="d-flex justify-content-between align-items-center"
                                >
                                 <span
                                    class="badge badge-danger font-weight-bold"
                                    >Hostel Life @ GMIT</span
                                  >
                                 
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6 grid-margin">
                            <div class="position-relative">
                              <div class="rotate-img">
                                {/* <img
                                   src="images/banner_14.jpg"
                                  alt="thumb"
                                  class="img-fluid"
                                /> */}
                                <ReactPlayer
                            url="https://www.youtube.com/watch?v=QkRASWS1kcY&list=PLUZ1R8FdWPEWY2Dx9O-ee_QsvpaV1lu3P&index=8"                         
                            width="100%"
                            height="200px"    />
                              </div> <br />
                              <div class="badge-positioned w-90">
                                <div
                                  class="d-flex justify-content-between align-items-center"
                                >
                                  <span
                                    class="badge badge-danger font-weight-bold"
                                    >Admission open @ GMIT</span>
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                   
                      <div class="col-lg-4">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <div class="card-title">
                            Latest Video
                          </div>
                          {/* <p class="mb-3">See all</p> */}
                        </div>
                        <div
                          class="d-flex justify-content-between align-items-center border-bottom pb-2"
                        >
                          <div class="div-w-80 mr-3">
                            <div class="rotate-img">
                              {/* <img
                                src="images/banner_16.jpg"
                                alt="thumb"
                                class="img-fluid"
                              /> */}
                              <ReactPlayer
                            url="https://www.youtube.com/watch?v=Z81eoRLRvhQ"
                            width="230px"
                            height="120px"  />
                            </div>
                          </div>
                          <h6 >
                            Fest of 2k19  in GMIT Campus
                          </h6>
                        </div>
                        <div
                          class="d-flex justify-content-between align-items-center border-bottom  pb-2"
                        >
                          <div class="div-w-80 mr-3">
                            <div class="rotate-img">
                              {/* <img
                                src="images/banner_18.jpg"
                                alt="thumb"
                                class="img-fluid"
                              /> */}
                              <ReactPlayer
                            url="https://www.youtube.com/watch?v=0eCXLMq-xdI"
                            width="230px"
                            height="120px"  />
                            </div>
                          </div>
                          
                          <h6 >
                            Flash Mob in GMIT Campus
                          </h6>
                        </div>
                        <div
                          class="d-flex justify-content-between align-items-center border-bottom pb-2"
                        >
                          <div class="div-w-80 mr-3">
                            <div class="rotate-img">
                              {/* <img
                                src="images/banner_17.jpg"
                                alt="thumb"
                                class="img-fluid"
                              /> */}
                              <ReactPlayer
                            url="https://www.youtube.com/watch?v=FnF1m_nRQhA"
                            width="230px"
                            height="120px"  />
                            </div>
                          </div>
                          <h6 >
                            Guest Lecture Session in GMIT
                          </h6>
                        </div>
                         <div
                          class="d-flex justify-content-between align-items-center border-bottom pb-2"
                        >
                          <div class="div-w-80 mr-3">
                            <div class="rotate-img">
                              {/* <img
                                src="images/banner_4.jpg"
                                alt="thumb"
                                class="img-fluid"
                              /> */}
                              <ReactPlayer
                            url="https://www.youtube.com/watch?v=z-tdnUMOP48"
                            width="230px"
                            height="120px"  />
                            </div>
                          </div>
                          <h6>
                              GMIT Wins most promissing college award
                          </h6>
                        </div>
                        {/* <div
                          class="d-flex justify-content-between align-items-center "
                        >
                          <div class="div-w-80 mr-3">
                            <div class="rotate-img">
                              <img
                                src="images/banner_5.jpg"
                                alt="thumb"
                                class="img-fluid"
                              />
                            </div>
                          </div>
                          <h3 class="font-weight-600 mb-0">
                            GMIT join JIS Group in 2019
                          </h3>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>     



    </div>
  );
};
  
export default Video;