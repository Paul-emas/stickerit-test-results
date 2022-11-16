import { useEffect, useState } from "react";

export const useCookieConsent = (debug: boolean) => {
  const LOCAL_STORAGE_KEY = "CookieConsent";
  const agree = localStorage.getItem(LOCAL_STORAGE_KEY) || "false";
  const [show, setShow] = useState(agree !== "true");

  const acceptConsent = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, "true");
    setShow(false);
  };

  useEffect(() => {
    return () => {
      if (debug) {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      }
    };
  }, []);

  return { acceptConsent, show };
};
