import { styled } from "@mui/material/styles";

type GridColumnWrapperProps = {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

export const GridColumnWrapper = styled("div")<GridColumnWrapperProps>(
  ({ xs, sm, md, lg, xl, theme }) => {
    const breakpoints: any = {};
    breakpoints[theme.breakpoints.up("xs")] = {
      width: xs || "100%",
      minWidth: xs || "100%",
    };

    if (sm) {
      breakpoints[theme.breakpoints.up("sm")] = {
        width: sm,
        minWidth: sm,
      };
    }
    if (md) {
      breakpoints[theme.breakpoints.up("md")] = {
        width: md,
        minWidth: md,
      };
    }
    if (lg) {
      breakpoints[theme.breakpoints.up("lg")] = {
        width: lg,
        minWidth: lg,
      };
    }
    if (xl) {
      breakpoints[theme.breakpoints.up("xl")] = {
        width: xl,
        minWidth: xl,
      };
    }

    return breakpoints;
  }
);
