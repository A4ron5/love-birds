import React, { useEffect } from "react";
import { useStore } from "effector-react";

import { $theme } from "./model";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useStore($theme);

  useEffect(() => {
    const body = document.querySelector("body");

    if (body) {
      body.dataset.theme = theme;
    }
  });

  return <>{children}</>;
};
