import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';
import SellerDashboard from './SellerDashboard';
 

const OfferForm = () => {
  const [show, setShow] = useState(false); // State to manage modal visibility
  const [offer, setOffer] = useState({
    price: "",
    comments: "",
  });

  // Open/Close Handlers
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Form Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOffer({
      ...offer,
    });
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Offer Submitted: ", offer);
    // You can add API call logic here to send the offer data to the backend
    handleClose(); // Close the modal after submission
    alert("Your offer has been submitted successfully!");
  };

  return (
    <>
      {/* "Make an Offer" Button */}
      <Button variant="info" className="text-white" onClick={handleShow}>
        MAKE AN OFFER
      </Button>

      {/* Offer Form Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Make an Offer</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            {/* Offer Price */}
            <Form.Group className="mb-3" controlId="offerPrice">
              <Form.Label>Offer Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your offer price"
                name="price"
                value={offer.price}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Comments */}
            <Form.Group className="mb-3" controlId="offerComments">
              <Form.Label>Comments or Justification</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your comments or justification"
                name="comments"
                value={offer.comments}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Link to= "/SellerDashboard">
            <Button variant="success" type="submit">
              Submit Offer
            </Button>
            </Link>
            
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default OfferForm;
