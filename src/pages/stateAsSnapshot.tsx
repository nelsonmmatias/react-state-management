import { FC } from "react";
import {
  SimpleCounter,
  UseCase,
} from "../components/simpleCounter/simpleCounter";

export const StateAsSnapshot: FC = () => {
  return (
    <div className="state-as-a-snapshot" id="state-as-a-snapshot">
      <h1 style={{ marginBottom: 10 }}>State as a Snapshot</h1>
      <img
        src="https://static.vecteezy.com/system/resources/previews/024/088/944/non_2x/hands-using-camera-photographic-free-png.png"
        alt="snapshot"
        width={"600px"}
      />
      <p>
        Ever tried to access a state variable in React just after updating it
        and wondered why you still get the previous value?
      </p>
      <p>Why this happens?</p>
      <p>Fisrt let's see a simple example:</p>
      <SimpleCounter useCase={UseCase.SNAPSHSOT} operator={5} />
      <p>
        A state variable’s value never changes within a render, even if its
        event handler’s code is asynchronous. Inside that render's{" "}
        <code style={{ backgroundColor: "lightgrey" }}>onClick</code> the value
        is still the previous number, even after the{" "}
        <code style={{ backgroundColor: "lightgrey" }}>
          setNumber(number + 5)
        </code>{" "}
        was called.
      </p>
      <p>
        In the expression above,{" "}
        <code style={{ backgroundColor: "lightgrey" }}>
          setNumber(number + 5)
        </code>{" "}
        is the setter function that lets us update the name variable, triggering
        a re-render and update of the UI. However, some times we would like to
        immediately access the state's newly updated value in order to perform
        some other action.
      </p>
      <p>
        Here is what this button’s click handler tells React to do in the first
        three clicks:
      </p>
      <ul>
        <li>
          <p>
            <code style={{ backgroundColor: "lightgrey" }}>
              setNumber(number + 5)
            </code>
            : <code style={{ backgroundColor: "lightgrey" }}>number</code> is 0
            so{" "}
            <code style={{ backgroundColor: "lightgrey" }}>
              setNumber(0 + 5)
            </code>
            .
            <ul>
              <li>React prepares to change number to 5 on the next render.</li>
            </ul>
          </p>
        </li>
        <li>
          <p>
            <code style={{ backgroundColor: "lightgrey" }}>
              setNumber(number + 5)
            </code>
            : <code style={{ backgroundColor: "lightgrey" }}>number</code> is 5
            so{" "}
            <code style={{ backgroundColor: "lightgrey" }}>
              setNumber(5 + 5)
            </code>
            .
            <ul>
              <li>React prepares to change number to 10 on the next render.</li>
            </ul>
          </p>
        </li>
        <li>
          <p>
            <code style={{ backgroundColor: "lightgrey" }}>
              setNumber(number + 5)
            </code>
            : <code style={{ backgroundColor: "lightgrey" }}>number</code> is 10
            so{" "}
            <code style={{ backgroundColor: "lightgrey" }}>
              setNumber(10 + 5)
            </code>
            .
            <ul>
              <li>React prepares to change number to 15 on the next render.</li>
            </ul>
          </p>
        </li>
      </ul>
    </div>
  );
};
