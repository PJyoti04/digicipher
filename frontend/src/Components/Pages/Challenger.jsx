import React from "react";
import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";

const Challenger = () => {
  return (
    <div
      className="h-[100vh] w-full flex gap-5 flex-col items-center bg-black"
      style={{ backgroundImage: "url('./bg.svg')", backgroundSize: "cover" }}
    >
      <div className="h-full w-full bg-opacity-20 backdrop-blur-sm flex flex-col items-center gap-8">
        <Navbar />
        <div className="h-[84vh] w-full px-4 flex flex-col gap-5">
          <div className="h-[6vh] w-[100%] flex justify-between items-center text-white px-3">
            <h1 className="px-4 py-1 text-lg font-bold rounded-lg bg-slate-400">
              Timer
            </h1>
            <h1 className="flex justify-center items-center bg-white text-black w-10 h-10 rounded-full text-4xl">
              ?
            </h1>
          </div>
          <div className="h-max w-full flex flex-col justify-between items-center">
            <HStack>
              <PinInput
                colorScheme={"whiteAlpha"}
                size={"lg"}
                manageFocus={true}
              >
                <PinInputField color={"white"} />
                <PinInputField color={"white"} />
                <PinInputField color={"white"} />
                <PinInputField color={"white"} />
              </PinInput>
            </HStack>
          </div>
          <div className="h-[25vh] w-full rounded-2xl overflow-y-scroll">
            <TableContainer>
              <Table variant="simple" color={"white"}>
                <TableCaption placement="top" color={"cyan"}>
                  Imperial to metric conversion factors
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th color={"white"}>#</Th>
                    <Th color={"white"}>Number</Th>
                    <Th color={"white"}>Position</Th>
                    <Th color={"white"} isNumeric>
                      Digits
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>1</Td>
                    <Td>4302</Td>
                    <Td>1</Td>
                    <Td>2</Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>7652</Td>
                    <Td>3</Td>
                    <Td>3</Td>
                  </Tr>
                  <Tr>
                    <Td>3</Td>
                    <Td>8945</Td>
                    <Td>2</Td>
                    <Td>3</Td>
                  </Tr>
                  <Tr>
                    <Td>4</Td>
                    <Td>5623</Td>
                    <Td>1</Td>
                    <Td>4</Td>
                  </Tr>
                  <Tr>
                    <Td>5</Td>
                    <Td>7896</Td>
                    <Td>3</Td>
                    <Td>2</Td>
                  </Tr>
                  <Tr>
                    <Td>6</Td>
                    <Td>2354</Td>
                    <Td>2</Td>
                    <Td>5</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
          <div className="w-full flex justify-center">
            <button className="text-white bg-red-400 h-max w-max px-2 py-1 uppercase text-xl font-bold rounded-lg">
              Give Up
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Challenger;
