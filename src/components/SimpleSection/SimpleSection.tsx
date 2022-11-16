import { Box, SxProps } from "@mui/material";
import React, { FC, ReactNode } from "react";

type SimpleSectionProps = {
  backgroundColor: string;
  content: ReactNode;
  sx: SxProps;
};

export const SimpleSection: FC<SimpleSectionProps> = ({
  backgroundColor,
  content,
  sx,
}) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor,
        padding: "80px 40px",
        boxSizing: "border-box",
        ...sx,
      }}
    >
      <Box sx={{ maxWidth: "1000px", margin: "0 auto" }}>{content}</Box>
    </Box>
  );
};
