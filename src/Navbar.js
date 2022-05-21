// import React from 'react';
// import {  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';




// class FixedNavbarExample extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           collapse: false,
//       };
//       this.onClick = this.onClick.bind(this);
//   }

//   onClick() {
//     this.setState({
//         collapse: !this.state.collapse,
//       });
//   }

//   render() {
//     const bgPink = {backgroundColor: '#e91e63'}
//     // const container = {height: 1300}
//     return(
//       <div>
//         {/* <Router> */}
//           <header>
//             <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
//               <MDBNavbarBrand href="/">
//                   {/* <strong>The Times of Gmit</strong> */}
                 
//               </MDBNavbarBrand>
              
              
//               <div class="contain" style={{ paddingLeft: "180px"}}>
              
//               <h2>The Times of Gmit</h2>
                                    
//                  </div>
         
//               <MDBNavbarToggler onClick={ this.onClick } />
//               <MDBCollapse isOpen = { this.state.collapse } navbar>
//                <MDBNavbarNav center>
//                  <MDBNavItem active style={{ paddingLeft: "100px"}}>
//                       <MDBNavLink to="/Signup" activeStyle><h6 >Sign up</h6></MDBNavLink>
//                  </MDBNavItem>
//                  <MDBNavItem active style={{ paddingRight: "170px"}}>
//                       <MDBNavLink to="/Login"><h6>Sign in</h6></MDBNavLink>
//                  </MDBNavItem>   
//                  <MDBNavItem active > 
//                   {/* <Form inline> */}
//       {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button> */}
//     {/* </Form>  */}
//                   </MDBNavItem>
//               </MDBNavbarNav>
               
//                 {/* <MDBNavbarNav center>
//                   <MDBNavItem active>
//                       <MDBNavLink to="/home">Home</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                       <MDBNavLink to="/about">About</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem active>
//                       <MDBNavLink to="/magazine">Magazine</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                       <MDBNavLink to="/library">Library</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                       <MDBNavLink to="/placement">Placement</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to="/TechFest">TechFest</MDBNavLink>
//                   </MDBNavItem>
//                 </MDBNavbarNav> */}
             
//                 <MDBNavbarNav right style={{ paddingRight: "200px"}}>
                
                    
//                     <MDBNavLink to="#"><MDBIcon fab icon="facebook-f" /></MDBNavLink>
//                     {/* <a href={"https://www.facebook.com/gargimemorial"}><MDBIcon fab icon="facebook-f"/></a> */}
                
                 
//                   <MDBNavItem>
//                     <MDBNavLink to="#"><MDBIcon fab icon="twitter" /></MDBNavLink>
//                     {/* <a href={"https://www.facebook.com/gargimemorial"}><MDBIcon fab icon="twitter" /></a> */}
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
//                     {/* <a href={"https://www.facebook.com/gargimemorial"}><MDBIcon fab icon="instagram" /></a> */}
//                   </MDBNavItem>
//                 </MDBNavbarNav>
            
//               </MDBCollapse>
//             </MDBNavbar>
//           </header>
//         {/* </Router> */}
//         {/* <MDBContainer style={container} className="text-center mt-5 pt-5">
//           <h2>This Navbar is fixed</h2>
//           <h5>It will always stay visible on the top, even when you scroll down</h5>
//           <br/>
//           <p>Full page intro with background image will be always displayed in full screen mode, regardless of device</p>
//         </MDBContainer> */}
//       </div>
//     );
//   }
// }

// export default FixedNavbarExample;

import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import {Modal, Button,Row ,Col } from "react-bootstrap";

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

  
constructor(){
  super();
  this.state={
    show: false
  }
}

handleModal(){
this.setState({show: !this.state.show})
}

render() {
  const bgPink = {backgroundColor: '#e91e63'}

  return (
    <Router>
      <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top" >
        <MDBNavbarBrand>
        <div class="contain" style={{ }}>
              
              <h2>The Times of Gmit</h2>
                                    
           </div>
          {/* <strong className="white-text">Navbar</strong> */}
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/Home">Home </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#">Reporter Login</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Admin Login</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="facebook-f" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="instagram" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown >
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" >
                <MDBDropdownItem   href="" onClick={() => this.handleModal()}>Reporter Login</MDBDropdownItem>
                  <MDBDropdownItem href="/Login">Admin Login</MDBDropdownItem>
                  {/* <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem> */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>


            <div>
         {/* <Button onClick={() => this.handleModal()}>Click me</Button> */}
   <Modal show={this.state.show} onHide={() => this.handleModal()} backdrop="static">
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Add Department
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => this.handleModal()}>Close</Button>
        <Button onClick={() => this.handleModal()}>Save</Button>
      </Modal.Footer> */}
       <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <div class="md-form mb-5">
          <i class="fas fa-envelope prefix grey-text"></i>
          <input type="email" id="defaultForm-email" class="form-control validate" />
          <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>
        </div>

        <div class="md-form mb-4">
          <i class="fas fa-lock prefix grey-text"></i>
          <input type="password" id="defaultForm-pass" class="form-control validate" />
          <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>
        </div>

    
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-default">Login</button>
      </div>
      </div>
      </div>
    </Modal>
    </div>


          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Navbar;