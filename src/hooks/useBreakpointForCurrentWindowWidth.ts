import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

export const useBreakpointForCurrentWindowWidth = () => {
  const [breakpoint, setBreakpoint] =
    useState<"xs" | "sm" | "md" | "lg" | "xl">("xs");
  const isSSR = typeof window === "undefined";
  const theme = useTheme();

  useEffect(() => {
    if (!isSSR) {
      const getCurrentBreakpoint = () => {
        const { values } = theme.breakpoints;
        const { innerWidth } = window;
        if (innerWidth >= values.xs && innerWidth < values.sm) {
          setBreakpoint("xs");
        } else if (innerWidth >= values.sm && innerWidth < values.md) {
          setBreakpoint("sm");
        } else if (innerWidth >= values.md && innerWidth < values.lg) {
          setBreakpoint("md");
        } else if (innerWidth >= values.lg && innerWidth < values.xl) {
          setBreakpoint("lg");
        } else if (innerWidth >= values.xl) {
          setBreakpoint("xl");
        }
      };
      window.addEventListener("resize", getCurrentBreakpoint);
      getCurrentBreakpoint();
      return () => window.removeEventListener("resize", getCurrentBreakpoint);
    }
  }, []);

  return breakpoint;
};
