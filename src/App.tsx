import { BrowserRouter } from "react-router-dom";
import { FC } from "react";
import { MainContentRouter } from "./components/navigation/mainContentRouter";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <MainContentRouter />
    </BrowserRouter>
  );
};
