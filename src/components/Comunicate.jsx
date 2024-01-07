import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Header from './Header';
import Footer from './Footer';
import "./Comunicate.css";

function Communicate() {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: ''
  };

  const position = {
    lat: 41.00164031982422,
    lng: 29.176177978515625,
  };

  return (
    <div>
      <Header/>
      <div className='containerMap'>
          <LoadScript googleMapsApiKey="AIzaSyBBO4nI7D5t0Db_42E8YXuqFezNV76OyR8">
            <GoogleMap className='mapContainerStyle'
              mapContainerStyle={mapContainerStyle}
              center={position}
              zoom={15}
              mapId="d6e9bb4b35604156"
            >
              <Marker position={position} title="My location" />
            </GoogleMap>
          </LoadScript>
      </div>


      <Accordion flush open={open} toggle={toggle} className='info'>
        
        <AccordionItem>
          <AccordionHeader targetId="1">Doğukan MUSLUKÇU&nbsp; - &nbsp;Back-End</AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>&#39;202003011008@dogus.edu.tr&#39;</strong>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="2">Berke ÇELİKEL&nbsp; - &nbsp;Back-End</AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>&#39;202003011027@dogus.edu.tr&#39;</strong>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="3">Mehmet Fatih KARA&nbsp; - &nbsp;Front-End</AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>&#39;202003011048@dogus.edu.tr&#39;</strong>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="4">Murat Özkan KAYA&nbsp; - &nbsp;Front-End</AccordionHeader>
          <AccordionBody accordionId="4">
            <strong>&#39;202003011036@dogus.edu.tr&#39;</strong>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="5">Elif MARALI&nbsp; - &nbsp;Front-End</AccordionHeader>
          <AccordionBody accordionId="5">
            <strong>&#39;202003011021@dogus.edu.tr&#39;</strong>
          </AccordionBody>
        </AccordionItem>
        
      </Accordion>
      <Footer/>
    </div>
  );
}

export default Communicate;