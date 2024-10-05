import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react';

const ReturnModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered >
      <ModalOverlay 
      bg="rgba(255, 255, 255, 0.1)" 
      backdropFilter="blur(10px)"
      />
      <ModalContent 
      width="90%" 
      className='flex items-center'
      bg="rgba(255, 255, 255, 0.7)"
      backdropFilter="blur(20px)"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      borderRadius="md"
      border="1px solid rgba(255, 255, 255, 0.3)"
      >
        <ModalHeader className='font-audiowide'>Return to Home</ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody className='font-orbitron font-bold'>
          Are you sure you want to <span style={{color:"red",fontWeight:"800"}}>Exit</span> ?
        </ModalBody>

        <ModalFooter className='font-orbitron'>
          <Button textColor={'#4ADE80'}
          fontWeight={'600'} className='bg-black' colorScheme="" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button textColor={'#4ADE80'}
          fontWeight={'600'} colorScheme="" className='bg-black' onClick={onConfirm}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ReturnModal;
