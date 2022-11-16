import { Box } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";

interface DropDownProps {
  children: React.ReactNode;
}

const Dropdown: React.FC<DropDownProps> = ({ children }) => {
  const DropdownWrapper = styled(Box)(() => ({
    display: "flex",
    position: "absolute",
    maxWidth: "100%",
    margin: "0 auto",
    left: 0,
    top: "56px",
    backgroundColor: "#99f2e4",
    borderRadius: "0 0 9px 9px",
  }));

  return (
    <Box>
      <DropdownWrapper>{children}</DropdownWrapper>
    </Box>
  );
};

export default Dropdown;
