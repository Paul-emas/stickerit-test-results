import { Box, Typography } from "@mui/material";
import React from "react";
import { StickerItemDetails } from "../../@types";
import { ButtonLink } from "../ButtonLink";
import StickerItem from "../StickerItem/StickerItem";

interface StickerMenuProps {
  title: string;
  data: StickerItemDetails[] | [];
  moreSection?: {
    title: string;
    linkTo: string;
  } | null;
}

const StickerMenu: React.FC<StickerMenuProps> = ({
  title = "",
  data = [],
  moreSection,
}) => {
  return (
    <Box
      sx={{
        ":not(first-child)": {
          marginRight: "30px",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "21px",
          color: "#141B4D",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          marginTop: "20px",
        }}
      >
        {data.length > 0 &&
          data.map((sticker: StickerItemDetails) => (
            <Box key={sticker.id}>
              <StickerItem {...sticker} />
            </Box>
          ))}
        {moreSection ? (
          <ButtonLink
            variant="outlined"
            displayWidth="full width"
            sx={{
              marginTop: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
              borderRadius: "9px",
            }}
            to={moreSection.linkTo ?? "/"}
            target="_self"
          >
            {moreSection.title}
          </ButtonLink>
        ) : null}
      </Box>
    </Box>
  );
};

export default StickerMenu;
