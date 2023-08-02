import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Bro = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(true);

  const handleShowModal = () => {
    setShowModal(true);
    setName(!name);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button variant='primary' onClick={handleShowModal}>
        Launch demo modal
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>{name.toString()}</h1>
          <input type="text" autoFocus/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant='primary'>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Bro;
