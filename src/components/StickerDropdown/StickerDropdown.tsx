import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { ButtonLink } from "../ButtonLink";
import { Grid } from "../Grid";
import { GridColumn } from "../GridColumn";
import { InlineImage } from "../InlineImage";
import StickerMenu from "../StickerMenu/StickerMenu";

const StickerDropdown: React.FC<{ data: any }> = ({ data }) => {
  const Container = styled(Box)(() => ({
    width: "100%",
    maxHeight: "410px",
    position: "relative",
    backgroundColor: "#fff",
    zIndex: "999999",
    left: 0,
    padding: "0 25px",
    margin: "0 2px",
    marginBottom: "2px",
    borderRadius: "0 0 9px 9px",
  }));

  return (
    <Container>
      <Box
        sx={{
          padding: "30px 0",
        }}
      >
        <Grid>
          {data?.items.length > 0 &&
            data?.items.map((item: any) => {
              return (
                <Box key={item?.id}>
                  <GridColumn xs="50%" md="25%">
                    {item?.items ? (
                      <Box
                        style={{
                          display: "flex",
                        }}
                      >
                        <StickerMenu
                          title={item?.title ?? ""}
                          data={item?.items ?? []}
                          moreSection={item?.moreSection || null}
                        />
                        {data?.items?.length > 1 && (
                          <Box
                            sx={{
                              position: "relative",
                              width: 0,
                              height: "215px",
                              border: "1px solid #CCF9F2",
                              top: "60px",
                              left: "-20px",
                            }}
                          />
                        )}
                      </Box>
                    ) : null}
                    {item?.type === "ImageWithButton" && (
                      <Box
                        sx={{
                          display: {
                            md: "none",
                            xl: "flex",
                          },
                          width: "260px",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100%",
                            marginLeft: "30px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "21px",
                              color: "#141B4D",
                              textAlign: "center",
                            }}
                          >
                            {item?.title ?? ""}
                          </Typography>
                          <div
                            style={{
                              position: "relative",
                            }}
                          >
                            <ButtonLink
                              sx={{
                                position: "absolute",
                                backgroundColor: "#FFFFFFBF",
                                paddingTop: "5px",
                                paddingBottom: "5px",
                                borderRadius: "9px",
                                width: "95%",
                                left: "2.5%",
                                right: "2.5%",
                                bottom: "10px",
                                ":hover": {
                                  backgroundColor: "#1976d2",
                                  color: "#fff",
                                },
                              }}
                              size="large"
                              variant="outlined"
                              to={item?.linkTo}
                            >
                              {item?.buttonText}
                            </ButtonLink>
                            <InlineImage
                              style={{
                                borderRadius: "9px",
                                marginTop: "20px",
                                objectFit: "cover",
                              }}
                              url={item?.imageUrl}
                              width={230}
                              height={232}
                              title={item?.title}
                              alt={item?.title}
                            />
                          </div>
                        </Box>
                      </Box>
                    )}
                  </GridColumn>
                </Box>
              );
            })}
        </Grid>
      </Box>
    </Container>
  );
};

export default StickerDropdown;
