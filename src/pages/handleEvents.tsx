import { FC } from "react";
import { Form } from "../components/form/form";
import { Button } from "../components/button/button";
import "./styles/handleEvents.css"

export const HandleEvents: FC = () => {
  return (
    <div className="handle-events" id="handle-events">
      <h1>How to handle user-initiated events</h1>
      <p>
        Event handlers are your own functions that will be triggered in response
        to interactions like clicking, hovering, focusing form inputs, and so
        on.
      </p>
      <h2>Adding event handlers</h2>

      <Button>I don't do anything</Button>

      <Form />
    </div>
  );
};
