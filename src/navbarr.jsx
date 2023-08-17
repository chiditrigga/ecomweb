
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './image/logo.svg'
import cart from './image/icon-cart.svg';
import avatar from './image/image-avatar.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Navbarr = ({value,change,total}) => {
  const [show, setShow] = useState(false);
   console.log(value)
    return (
        <>
         <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
        
       
        {['md',].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3">
          <Container >
         <span> <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="#"><Image fluid src={logo} /></Navbar.Brand></span>
            
          
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`} 
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 ">
                  <Nav.Link href="#action1">Collection</Nav.Link>
                  <Nav.Link href="#action2">Men</Nav.Link>
                  <Nav.Link href="#action1">Women</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="#action1">Contact</Nav.Link>
                  
                 
                </Nav>
               
              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
            <span className='fl'><Nav.Link  onClick={() => setShow(true)} className='pe-3' href="#action1"><Image className='position-relative'  src={cart} />
           {change &&  <Badge className=  'position-absolute  translate-middle badge rounded-pill bg-danger'  >{total} </Badge>}
           </Nav.Link>
            <Nav.Link href="#action2"><Image fluid src={cart} /></Nav.Link></span>
          </Container>
          
          
        </Navbar>
      ))}

        
        </>
      );
}
 
export default Navbarr;