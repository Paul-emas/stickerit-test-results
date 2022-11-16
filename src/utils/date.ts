import { format, utcToZonedTime } from "date-fns-tz";
import { isValid } from "date-fns";

export const formatUtcDate = (
  date: Date | undefined | string,
  formatStr: string
): string => {
  if (!date) {
    return "-";
  }

  if (!isValid(new Date(date))) {
    return "-";
  }

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return format(utcToZonedTime(date, timeZone), formatStr).trim();
};
