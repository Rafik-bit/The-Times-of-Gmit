// import React from "react";
 //import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
 import { MDBCard } from 'mdbreact';

// const Signup = () => {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <MDBCard>
//             <MDBCardBody>
//               <form>
//                 <p className="h4 text-center py-4">Sign up</p>
//                 <div className="grey-text">
//                   <MDBInput
//                     label="Your name"
//                     icon="user"
//                     group
//                     type="text"
//                     validate
//                     required
//                     error="wrong"
//                     success="right"
//                   />
//                   <MDBInput
//                     label="Your email"
//                     icon="envelope"
//                     group
//                     type="email"
//                     validate
//                     required
//                     error="wrong"
//                     success="right"
//                   />
//                   <MDBInput
//                     label="Your mobile"
//                     icon="mobile"
//                     //icon="exclamation-triangle"
//                     group
//                     type="number"
//                     validate
//                     required
//                     error="wrong"
//                     success="right"
//                   />
//                   <MDBInput
//                     label="Your password"
//                     icon="lock"
//                     group
//                     type="password"
//                     validate
//                     required
//                   />
//                    <MDBInput
//                     label="Confirm your password"
//                     icon="exclamation-triangle"
//                     group
//                     type="password"
//                     validate
//                     required
//                   />
//                 </div>
//                 <div className="text-center py-4 mt-3">
//                   <MDBBtn color="cyan" type="submit">
//                     Register
//                   </MDBBtn>
//                 </div>
//               </form>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default Signup;
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
// import './component.css';

let Signup=()=>{


    let [user, setUser] = useState({
        email:"", mobile: "", password: ""
    });

    let name, value;

    let handleInput = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    var userData = async (e) => {
        e.preventDefault();
        let {email,mobile,password} = user;

        if(email === "" || mobile === "" || password === "" ){
            window.alert("Please fill the all input fields");
            return;

        }

        let res = await fetch("/signupenc", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,mobile,password
            })
        });
 
        let newdata = await res.json();

        if (newdata.status === 402 || !newdata) {
            window.alert("Registration Unsucessful");
        } else {  
            setUser({
                email:"", mobile: "", password: ""
            });
            window.alert("Registration Sucessful");
        }
   }
   return (
        <center>
        <div class="container"><br></br><br></br><br></br><br></br><br></br>
        <MDBCard md-6>
            <h2>Signup</h2>
            <div >
                <form method="POST">

                    Email<br /><input type="text" class="form-control" placeholder="Enter email" name="email" required value={user.email} onChange={handleInput} /><br /><br />


                    Mobile<br /><input type="text" class="form-control" placeholder="Enter Mobile" name="mobile" required value={user.mobile} onChange={handleInput} /><br /><br />
                    Password<br /><input type="password" class="form-control" placeholder="Enter Password" name="password" required value={user.password} onChange={handleInput} />


                    <br/> <Button variant="primary" type="submit" onClick={userData}>
                        Submit
                    </Button>
                </form>
            </div>
            </MDBCard>
        </div>
        </center>
/* <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
 <div class="modal-dialog" role="document">
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
 </div>




  <div class="text-center">
  <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm">Launch
    Modal Login Form</a>
 </div>
 </div> */
      
       
          
    )
}


export default Signup;
// import Modal from 'react-bootstrap/Modal'

// function Signup() {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Launch static backdrop modal
//         </Button>
  
//         <Modal
//           show={show}
//           onHide={handleClose}
//           backdrop="static"
//           keyboard={false}
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Modal title</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             I will not close if you click outside me. Don't even try to press
//             escape key.
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary">Understood</Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
  
//   render(<Signup />);