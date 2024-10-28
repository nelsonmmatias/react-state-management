import { Sidebar } from "../sidebar/sidebar";
import "./pageLayout.css";
import { FC, ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};
