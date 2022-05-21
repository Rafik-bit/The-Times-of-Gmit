import React, {Component} from 'react';
import {Modal, Button,Row ,Col } from "react-bootstrap";


 class ModalAp extends Component {
  
  constructor(){
        super();
        this.state={
          show: false
        }
    }

    handleModal(){
      this.setState({show: !this.state.show})
    }

render(){
     return(
       <div style={{paddingTop:"150px"}}>
         <Button onClick={() => this.handleModal()}>Click me</Button>
   <Modal show={this.state.show} onHide={() => this.handleModal()}>
      <Modal.Header closeButton>
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
      </Modal.Footer>
    </Modal>
    </div>
     );

  }

}


  export default ModalAp;
  //render(<ModalAp />);