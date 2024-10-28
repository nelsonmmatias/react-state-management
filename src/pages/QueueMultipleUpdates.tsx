import { FC, useState } from "react";
import {
  SimpleCounter,
  UseCase,
} from "../components/simpleCounter/simpleCounter";
import { CodeSnippet } from "../components/codeSnippet/codeSnippet";
import { Button } from "../components/button/button";

export const QueueMultipleUpdates: FC = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="queue-multiple-updates" id="queue-multiple-updates">
      <h1 style={{ marginBottom: 10 }}>Queueing multiple updates</h1>
      <p>
        As we seen before, setting a state will queue another render, but
        sometimes we might want to perform multiple operations on the value
        before queueing the next render.
      </p>
      <p>Fisrt let's see a simple example:</p>
      <SimpleCounter useCase={UseCase.QUEUEING} operator={3} />
      <p>
        As we ca nsee above, after clicking on "+3" button, we are calling three
        times the method{" "}
        <code style={{ backgroundColor: "lightgrey" }}>
          setNumber(number + 1)
        </code>
        . At the first sight, is expecting that the value should increase from 0
        to 3.
      </p>
      <CodeSnippet
        code={`
    const handleQueueuingClick = () => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
    };
        `}
      />
      <p>
        However, as we talk on the previous section, each render's state values
        are fixed, so the number inside the first render is always 0, no matter
        how many times we call the set funtion.
      </p>
      <p>
        Nevertheless, React acts like a waiter in a Restaurant. React waits
        until all code in the event handlers has run before processing your
        state updates, like the waiter doesn't go to the kitchen after each
        request, instead, the waiter wait until you complete the request
        (dishes, drinks, etc) before it goes to the kitchen!
      </p>
      <p>
        This let us update multiple state variables or multiple times the same
        variable before re-rendering - without triggering too many re-renders.
        This behavior is known as <strong>batching</strong>.
      </p>
      <p>
        Batching makes the React app more efficient, run faster and allows to
        avoid dealing with unexpectable re-renders with some updates in
        progress.
      </p>
      <p>
        The example above is an uncommon use case, but is possible to do
        multiple updates on the same state variable.
      </p>
      <p>Replace the handleClick with this new handler:</p>
      <CodeSnippet
        code={`
  const handleQueueuingClick = () => {
    setNumber(prevNumber => prevNumber + 1);
    setNumber(prevNumber => prevNumber + 1);
    setNumber(prevNumber => prevNumber + 1);
  };
        `}
      />
      <p>
        Instead of passing the state value like{" "}
        <code style={{ backgroundColor: "lightgrey" }}>
          setNumber(number + 1)
        </code>{" "}
        we can pass a function that calculates the next state based on the
        previous state in queue:{" "}
        <code style={{ backgroundColor: "lightgrey" }}>
          {`setNumber(prevNumber => prevNumber + 1)`}
        </code>
        .
      </p>
      <p>
        This is a way to tell React{" "}
        <strong>to do something with the sate value</strong> instead just
        replacing it.
      </p>
      <p>Here is the way that React works behinds the scene:</p>
      <ul>
        <li>
          <p>
            <code
              style={{ backgroundColor: "lightgrey" }}
            >{`setNumber(prevNumber => prevNumber + 1)`}</code>
            :{" "}
            <code
              style={{ backgroundColor: "lightgrey" }}
            >{`prevNumber => prevNumber + 1)`}</code>{" "}
            is a function. React adds it to a queue.
          </p>
        </li>
        <li>
          <p>
            <code
              style={{ backgroundColor: "lightgrey" }}
            >{`setNumber(prevNumber => prevNumber + 1)`}</code>
            :{" "}
            <code
              style={{ backgroundColor: "lightgrey" }}
            >{`prevNumber => prevNumber + 1)`}</code>{" "}
            is a function. React adds it to a queue.
          </p>
        </li>
        <li>
          <p>
            <code
              style={{ backgroundColor: "lightgrey" }}
            >{`setNumber(prevNumber => prevNumber + 1)`}</code>
            :{" "}
            <code
              style={{ backgroundColor: "lightgrey" }}
            >{`prevNumber => prevNumber + 1)`}</code>{" "}
            is a function. React adds it to a queue.
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: 10, paddingBottom: 10 }}>
        When <code style={{ backgroundColor: "lightgrey" }}>useState</code> is
        called during the next Render, React goes through the queue. If the
        previous number state was 0 so that's the what React passes to the first
        adapter function as the{" "}
        <code style={{ backgroundColor: "lightgrey" }}>prevNumber</code>{" "}
        argument. Then React takes the return value of your previous updater
        function and passes it to the next updater as{" "}
        <code style={{ backgroundColor: "lightgrey" }}>prevNumber</code>, and so
        on:
      </p>
      <table>
        <thead>
          <tr>
            <th>queued update</th>
            <th>n</th>
            <th>returns</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code
                style={{ backgroundColor: "lightgrey" }}
              >{`prevNumber => prevNumber + 1`}</code>
            </td>
            <td>0</td>
            <td>
              {" "}
              <code
                style={{ backgroundColor: "lightgrey" }}
              >{`0 + 1 = 1`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code
                style={{ backgroundColor: "lightgrey" }}
              >{`prevNumber => prevNumber + 1`}</code>
            </td>
            <td>1</td>
            <td>
              {" "}
              <code
                style={{ backgroundColor: "lightgrey" }}
              >{`1 + 1 = 2`}</code>
            </td>
          </tr>
          <tr>
            <td>
              <code
                style={{ backgroundColor: "lightgrey" }}
              >{`prevNumber => prevNumber + 1`}</code>
            </td>
            <td>2</td>
            <td>
              {" "}
              <code
                style={{ backgroundColor: "lightgrey" }}
              >{`2 + 1 = 3`}</code>
            </td>
          </tr>
        </tbody>
      </table>
      <h4>Quick challenge</h4>
      <p>What do you think about this handler?</p>
      <CodeSnippet
        code={`
  const handleQueueuingClick = () => {
    setNumber(number + 5);
    setNumber(prevNumber => prevNumber + 1);
  };
        `}
      />
      <Button onClick={() => setShowAnswer(!showAnswer)}>Result</Button>
      {showAnswer && (
        <>
          <p>
            <strong>Increase 6 on each click!</strong>
          </p>
          <ul>
            <li>
              <p>
                <code
                  style={{ backgroundColor: "lightgrey" }}
                >{`setNumber(number + 5)`}</code>
                : number is 0, so{" "}
                <code
                  style={{ backgroundColor: "lightgrey" }}
                >{`setNumber(0 + 5)`}</code>
                . React adds "replace with 5" to its queue.
              </p>
            </li>
            <li>
              <p>
                <code
                  style={{ backgroundColor: "lightgrey" }}
                >{`setNumber(prevNumber => prevNumber + 1)`}</code>
                :{" "}
                <code
                  style={{ backgroundColor: "lightgrey" }}
                >{`prevNumber => prevNumber + 1)`}</code>{" "}
                is an adapter function. React adds that function to its queue.
              </p>
            </li>
          </ul>
          <table>
            <thead>
              <tr>
                <th>queued update</th>
                <th>n</th>
                <th>returns</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"replace with 5"</td>
                <td>Not applicable</td>
                <td>5</td>
              </tr>
              <tr>
                <td>
                  <code
                    style={{ backgroundColor: "lightgrey" }}
                  >{`prevNumber => prevNumber + 1`}</code>
                </td>
                <td>5</td>
                <td>
                  {" "}
                  <code
                    style={{ backgroundColor: "lightgrey" }}
                  >{`5 + 1 = 6`}</code>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            React stores 6 as the final result when{" "}
            <code style={{ backgroundColor: "lightgrey" }}>useState</code>{" "}
            finish the execution!
          </p>
          <p>What do you think about this handler?</p>
          <CodeSnippet
            code={`
  const handleQueueuingClick = () => {
    setNumber(number + 5);
    setNumber(prevNumber => prevNumber + 1);
    setNumber(39); // That's my age :D
  };
        `}
          />
        </>
      )}
    </div>
  );
};
