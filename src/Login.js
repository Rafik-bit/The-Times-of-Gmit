import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
// import './component.css';

let Login=()=>{


    let [user, setUser] = useState({
        email:"", password: ""
    });

    let name, value;

    const history = useHistory();

    let handleInput = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    var userData = async (e) => {
        e.preventDefault();
        let {email,password} = user;
        if(email === "" || password === "" ){
            window.alert("Please fill the all input fields");
            return;

        }

        let res = await fetch("/newlogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,password
            })
        });
 
        let newdata = await res.json();

        if (newdata.status === 402 || !newdata) {
            window.alert("Login Unsucessful");
        } else {  
            window.alert("Login Sucessful");
            history.push("/")

        }
   }
    return (
        <center>
            <br></br><br></br><br></br><br></br><br></br>
        <div class="container">
            <MDBCard>
            <h2>SignIn</h2>
            <div>
                <form method="POST">

                    Email<br /><input type="text" placeholder="Enter email" class="form-control" name="email" value={user.email} onChange={handleInput} /><br /><br />


                    {/* Mobile<br /><input type="text" placeholder="Enter Mobile" name="mobile" value={user.mobile} onChange={handleInput} /><br /><br /> */}
                    Password<br /><input type="password" placeholder="Enter Password" class="form-control" name="password" value={user.password} onChange={handleInput} />

                    <br />
                    <br />
                    <br />
                    <Button variant="primary" type="submit" onClick={userData}>
                        Submit
                    </Button>
                </form>
            </div>
            </MDBCard>
        </div>
        </center>
    )
}


export default Login;