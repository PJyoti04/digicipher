import React from "react";
import { Avatar, WrapItem, Wrap } from "@chakra-ui/react";

const User = ({ size = "sm" }) => {
  return (
    <div>
      <Wrap>
        <WrapItem>
          <Avatar size={size} name="" src="" />
        </WrapItem>
      </Wrap>
    </div>
  );
};

export default User;
