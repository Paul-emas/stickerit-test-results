import { Link } from "gatsby";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC } from "react";

export type ButtonLinkProps = ButtonProps & {
  to: string;
  target?: string;
  displayWidth?: "inline" | "wider" | "full width";
};

const LINK_BASE_STYLES = {
  padding: "5px 15px",
  textDecoration: "none",
  color: "inherit",
  width: "100%",
};

const StyledLink = styled(Link)(() => {
  return { ...LINK_BASE_STYLES };
});

export const ButtonLink: FC<ButtonLinkProps> = ({
  to = "",
  children,
  target,
  sx = {},
  displayWidth = "inline",
  ...rest
}) => {
  return (
    <Button
      fullWidth={displayWidth === "full width"}
      sx={{
        padding: 0,
        ...(displayWidth === "wider"
          ? { paddingLeft: 4, paddingRight: 4 }
          : {}),
        ...sx,
      }}
      {...rest}
    >
      {to.indexOf("/") === 0 ? (
        <StyledLink to={to}>{children}</StyledLink>
      ) : (
        <a
          style={{ ...LINK_BASE_STYLES }}
          href={to}
          target={target}
          rel="nofollow noopener"
        >
          {children}
        </a>
      )}
    </Button>
  );
};
