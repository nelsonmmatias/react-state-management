import { FC } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <h2>Adding Interactivity</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-me">About me</Link>
          </li>
          <li>
            <Link to="/handle-events">Handle events</Link>
          </li>
          <li>
            <Link to="/component-memory">Component's memory</Link>
          </li>
          <li>
            <Link to="/render-and-commit">Render and commit</Link>
          </li>
          <li>
            <Link to="/state-as-a-snapshot">State as a Snapshot</Link>
          </li>
          <li>
            <Link to="/queue-multiple-updates">Queueing multiple updates</Link>
          </li>
          <li>
            <Link to="/update-object">Update Objects in a component state</Link>
          </li>
          <li>
            <Link to="/update-arrays">Update Arrays in a component state</Link>
          </li>
          <li>
            <Link to="/use-effect">useEffect hook - how and when</Link>
          </li>
          <li>
            <Link to="/react-redux">Manage complex applications with React Redux</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
