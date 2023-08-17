import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import pro1 from './image/image-product-1.jpg'
import pro2 from './image/image-product-2.jpg'
import pro3 from './image/image-product-3.jpg'
import pro1t from './image/image-product-1-thumbnail.jpg'
import pro2t from './image/image-product-2-thumbnail.jpg'
import pro3t from './image/image-product-3-thumbnail.jpg'
import pro4t from './image/image-product-4-thumbnail.jpg'
import pro4 from './image/image-product-4.jpg'
import add from './image/icon-plus.svg'
import minus from './image/icon-minus.svg'
import cart from './image/icon-cart.svg'
import Navbarr from './navbarr';
import Modal from 'react-bootstrap/Modal';


import Carousel from 'react-bootstrap/Carousel';

import { useState } from 'react';



const Body = () => {
 const [name,setName] = useState(pro1)
 const [classs,setClasss] = useState(true)
 const [classs2,setClasss2] = useState(false)
 const [classs3,setClasss3] = useState(false)
 const [classs4,setClasss4] = useState(false)
 const[value,setValue] = useState(0)
 const [change,setChange] = useState(false)
 const [total,setTotal] = useState(0 )

 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 
 

let change1 = (e) => {
    setName(pro1)
    setClasss2(false)
    setClasss3(false)
    setClasss4(false)
    return setClasss(true)
}
let change2 = () => {
    setName(pro2)
    setClasss(false)
    setClasss3(false)
    setClasss4(false)
    return setClasss2(true)
}
let change3 = () => {
    setName(pro3)
    setClasss(false)
    setClasss2(false)
    setClasss4(false)
    return setClasss3(true)
}
let change4 = () => {
    setName(pro4)
    setClasss(false)
    setClasss2(false)
    setClasss3(false)
    return setClasss4(true)
}


const addd = ()=> {
    setValue( value + 1)
}

const sub = ()=> {
   return value === 0? value:  setValue( value - 1)
   
}

const addtocart = () => {
    setTotal( value + total)
    setValue(0)
 setChange( () => {
    if (value > 0){
        return true
    }
 })

 

} 



    return ( <>
    
    <Navbarr value={value} change={change} total ={total}/>
          <Container>
          
         {/* modal big picture start------------------------------------------------------------------------------------------------------------- */}

      <Modal centered show={show} onClick={handleClose}>
       <Button onHide={handleClose}>close</Button>
           <Carousel  indicators={false}>
      <Carousel.Item>
        <Image fluid src={pro1} />
       
      </Carousel.Item>
      <Carousel.Item>
      <Image fluid src={pro2} />
       
      </Carousel.Item>
      <Carousel.Item>
      <Image fluid src={pro3} />
        
      </Carousel.Item>
      <Carousel.Item>
      <Image fluid src={pro4} />
        
      </Carousel.Item>

    </Carousel> 
     
       
      </Modal>
       {/* modal big picture end--------------------------------------------------------------------------------------------------------------- */}
            <Row>
                <Col className='p-lg-5 p-0' md={6}>
                <Image onClick={handleShow} fluid className='mt-4 d-none d-sm-block ' id='bor' src={name} />
                <Carousel className='d-block d-sm-none' indicators={false}>
      <Carousel.Item>
        <Image fluid src={pro1} />
       
      </Carousel.Item>
      <Carousel.Item>
      <Image fluid src={pro2} />
       
      </Carousel.Item>
      <Carousel.Item>
      <Image fluid src={pro3} />
        
      </Carousel.Item>
      <Carousel.Item>
      <Image fluid src={pro4} />
        
      </Carousel.Item>

    </Carousel>
    <div className=' d-none d-sm-block'>
               <Row className='mt-5'> 
               <Col md={3}><Image className=  {classs && 'bor'} id='bor' onClick={(e)=> change1(e.target)}   fluid src={pro1t} /></Col> <Col md={3}><Image className=  {classs2 && 'bor'} id='bor' onClick={()=> change2()} fluid src={pro2t} /></Col> <Col md={3}><Image className=  {classs3 && 'bor'} id='bor' onClick={()=> change3()} fluid src={pro3t} /></Col> <Col md={3}><Image className=  {classs4 && 'bor'} id='bor' onClick={()=> change4()} fluid src={pro4t} /></Col> 
                </Row>
                </div>
                </Col>

                <Col md={6} className='p-lg-5 px-md-3 align-self-md-center' >
                    <h5  className='orange pt-md-5'>SNEAKER COMPANYs</h5>
                    <h2 className='weight pb-md-3 fbig' >Fall Limited Edition Sneakers</h2>

                    <h6 className='pb-md-4 fsize'> These low-profile sneakers are your perfect casual wearcompanion. Featuring a durable rubber outer sole. They'll withstand everything the weather can offer.</h6>
                    <Row>
                        <Col xs={9} md={12}>  <span className='weight' style={{fontSize:'30px'}}>$125.00</span> <span className='fifty p-2'>50% </span>  </Col> 
                       <Col xs={3} md={12} > <strike>$250.00</strike> </Col>
                    </Row>
                    <Row className='p-3 mt-md-4 '>
                        <Col xs={12} md={5} className=''>
                        <Row  className='text-center addplace p-1 p-lg-2  mb-3'>
                                <Col xs={4} > <Button onClick={sub} style={{background: 'hsl(223, 64%, 98%)',borderColor: 'hsl(223, 64%, 98%)' }}><Image className=' ' src={minus} /></Button>  </Col>
                                <Col  xs={4} className='my-auto'>{value}</Col>
                                <Col  xs={4}><Button onClick={addd} style={{background: 'hsl(223, 64%, 98%)',borderColor: 'hsl(223, 64%, 98%)' }}><Image className=' ' src={add} /></Button></Col>
                                
                            </Row>
                        </Col>
                        <Col className='p-0' xs={12} md={7}>  <Button className='w-100 p-lg-3 p-2 ' onClick={addtocart} ><Image className='car' src={cart}  /> Add to cart</Button> </Col>
                    </Row>
                </Col>

            </Row>
          </Container>
    
    
    </> );
}
 
export default Body;