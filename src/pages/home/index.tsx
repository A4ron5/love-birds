import * as React from "react";

import { Apod } from "features/apod";
import { MainTemplate } from "ui/templates";

export const HomePage = () => {
  return (
    <MainTemplate>
      <span>Привет. Тест шрифта JetBrainsMonoRegular.</span>
      <Apod />
    </MainTemplate>
  );
};
