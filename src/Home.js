// import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Footer from './Footer';
import Latestnews from './Latestnews';
import Video from './Video';
import Webseries from './Webseries';
import CDC from './CDC';
import PlacementProfile from './PlacementProfile';
import Featurenews from './Featurenews';
//import Test from './Test';
import ModalAp from './ModalAp';


// import FixedNavbarExample from './Navbar';


function Home() {
  return (
    <div>
 {/* < ModalAp/>   */}
       {/* <Test /> */}
    <Latestnews />
    <Video />
    <Featurenews  />   
    <Webseries />
    <CDC />
    <PlacementProfile />
    <Footer />
{/* <FixedNavbarExample /> */}
 
       
        {/* <Route path='/home' component={Home} /> */}
        {/* <Route exact path="/Signup"  component={Signup} />
        <Route exact path="/Login"  component={Login} /> */}
  </div>
    
  );
}

export default Home;