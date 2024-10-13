import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Stack,
} from "@chakra-ui/react";

const ResultModal = ({ isOpen, randnum, win, onClose, onConfirm, onPlay }) => {

  const feed = {
    0 : "You Won !!! 🎉🎉",
    1: "OOPS !! Time Out ⏰",
    2: "Try Hard 🤞",
    3: "You Lose 😭😢😢"
  }


  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="rgba(255, 255, 255, 0.1)" backdropFilter="blur(10px)" />
      <ModalContent
        width="90%"
        height="300px" // Set consistent height
        bg={win === 0 ? "rgba(74, 222, 128, 0.7)" : "rgba(239, 68, 68, 0.7)"}
        backdropFilter="blur(20px)"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        borderRadius="md"
        border="1px solid rgba(255, 255, 255, 0.3)"
      >
        <ModalHeader
          textAlign="center"
          className="font-audiowide"
          fontSize={"30px"}
          color={"white"}
          // color={win ? "#4ADE80" : "#EF4444"}
        >
          {feed[win]}
        </ModalHeader>
        <ModalBody textAlign="center" className="font-orbitron font-bold text-2xl">
          The Number is: {randnum}
        </ModalBody>

        <ModalFooter>
          <Stack spacing={4} width="100%" align="center">
            <Button
              textColor={"white"}
              fontWeight={"600"}
              width={"300px"}
              bg="black"
              onClick={onPlay}
            >
              Play Again
            </Button>
            <Button
              textColor={"white"}
              fontWeight={"600"}
              width={"300px"}
              bg="black"
              onClick={onConfirm}
            >
              Back To Home
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ResultModal;
