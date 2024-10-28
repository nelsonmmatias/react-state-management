import { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  return (
    <div className="home" id="home">
      <h1>Adding Interactivity (state management)</h1>
      <p>
        In React, data that changes over time is called state. You can add state
        to any component, and update it as needed.
      </p>
      <h2>In this session</h2>
      <ul>
        <li>
          <Link to={"/handle-events"}>
            How to handle user-initiated events{" "}
          </Link>
        </li>
        <li>
          <Link to={"/state-memory"}>
            How to make components “remember” information with state
          </Link>
        </li>
        <li>
          <Link to={"/render-and-commit"}>
            How React updates the UI in two phases
          </Link>
        </li>
        <li>
          <Link to={"/state-as-a-snapshot"}>
            Why state doesn’t update right after you change it
          </Link>
        </li>
        <li>
          <Link to={"/queue-multiple-updates"}>
            How to queue multiple state updates
          </Link>
        </li>
        <li>
          <Link to="/update-object">How to update an object in state</Link>
        </li>
        <li>
          <Link to="/update-arrays">How to update an array in state</Link>
        </li>
        <li>
          <Link to="/use-effect">How and when use an useEffect</Link>
        </li>
        <li>
          <Link to="/react-redux">
            What is application state level and how to manage it with React Redux
          </Link>
        </li>
      </ul>
    </div>
  );
};
