import { Box, Typography } from "@mui/material";
import React from "react";
import { StickerItemDetails } from "../../@types";
import { InlineImage } from "../InlineImage";

const StickerItem: React.FC<StickerItemDetails> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "0 4px",
        marginBottom: "10px",
        width: "280px",
        color: "#141B4D",
        ":hover": {
          textDecoration: "underline",
          cursor: "pointer",
        },
      }}
    >
      <div>
        {props.size === "small" ? (
          <InlineImage
            url={props.iconUrl}
            width={30}
            height={30}
            title={props.title}
            alt={props.subtitle}
          />
        ) : (
          <InlineImage
            url={props.iconUrl}
            width={50}
            height={50}
            title={props.title}
            alt={props.subtitle}
          />
        )}
      </div>
      <div>
        <Typography
          sx={{
            fontSize: props.size === "small" ? "13px" : "15px",
          }}
        >
          {props.title}
        </Typography>
        <Typography
          sx={{
            fontSize: props.size === "small" ? "10px" : "12px",
          }}
        >
          {props.subtitle}
        </Typography>
      </div>
    </Box>
  );
};

export default StickerItem;
