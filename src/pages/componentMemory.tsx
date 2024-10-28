import { FC, useState } from "react";
import { Gallery } from "../components/gallery/gallery";
import { Button } from "../components/button/button";
import { CodeSnippet } from "../components/codeSnippet/codeSnippet";

export const ComponentMemory: FC = () => {
  const [result, showResult] = useState(false);

  return (
    <div className="state-memory" id="state-memory">
      <h1>State: A component's memory</h1>
      <p>
        Components frequently need to update the display based on user
        interactions.
      </p>
      <p>
        For instance, entering text in a form should refresh the input field,
        pressing "next" on an image carousel should switch the displayed image,
        and clicking "buy" should add an item to the shopping cart.
      </p>
      <p>
        Components must "retain" certain information, such as the current input,
        the active image, and the shopping cart contents. In React, this type of
        component-specific memory is referred to as state.
      </p>
      <Gallery />
      <h2>Add a state variable</h2>
      <p>
        The problem here is the fact we are using native Javascript variables
        and the React doesn't act them as a state.{" "}
        <code style={{ backgroundColor: "lightgrey" }}>let index = 0;</code> and
        we are trying to change its value{" "}
        <code style={{ backgroundColor: "lightgrey" }}>index = index + 1;</code>
        .
      </p>
      <p>This will not work in a React state management.</p>
      <p>First we need to create a state to the component. And How we do it?</p>
      <CodeSnippet
        code={`
    const [index, setIndex] = useState(0);
        `}
      />
      <p>
        The <code style={{ backgroundColor: "lightgrey" }}>useState()</code>{" "}
        hook uses the Javascript syntax know as "array destructuring" on its
        structure. This means that we are making two new variables to the React
        state. On the left we are creating the variable index witch represents a
        number and on the right we are creating the setIndex variable witch is a
        void function to set the index variable.
      </p>
      <p>
        Now we can just set the index on the{" "}
        <code style={{ backgroundColor: "lightgrey" }}>handleClick()</code>{" "}
        function:
      </p>
      <CodeSnippet
        code={`
    const handleClick = () => {
      setIndex((prevIndex) => (prevIndex + 1) % productList.length);
    };
        `}
      />
      <p>
        You may have notice this{" "}
        <code style={{ backgroundColor: "lightgrey" }}>prevIndex</code>{" "}
        property. So what is that?
      </p>
      <p>
        If the new state is computed using the previous state, you can pass a
        function to setState. We will see more on that later! But basically{" "}
        <code style={{ backgroundColor: "lightgrey" }}>prevIndex</code> is a
        function that uses the previous state but you can call everything you
        want to this function.
      </p>

      <h2>Explanation</h2>

      <Button onClick={() => showResult(!result)}>Show explanation!</Button>

      {result && (
        <div className="explanation">
          <h1>Understanding State and Re-renders in React</h1>
          <p>
            In this example, the <code>handleClick</code> event handler updates
            a local variable, <code>index</code>. However, there are two reasons
            why this change isn't reflected in the UI:
          </p>
          <ol>
            <li>
              <strong>Local variables don’t persist between renders.</strong>
              When React re-renders this component, it resets all local
              variables, ignoring any changes made in previous renders.
            </li>
            <li>
              <strong>
                Changes to local variables don’t trigger re-renders.
              </strong>
              React doesn't monitor local variables, so it doesn’t know when to
              re-render the component to reflect updated data.
            </li>
          </ol>
          <p>
            To properly update a component with new data, two things need to
            happen:
          </p>
          <ul>
            <li>
              We need to <strong>retain the data between renders</strong>.
            </li>
            <li>
              We need to <strong>tell React to re-render the component</strong>{" "}
              with the new data.
            </li>
          </ul>
          <p>
            React’s <code>useState</code> Hook provides both of these
            functionalities:
          </p>
          <ul>
            <li>
              A <strong>state variable</strong> is used to hold data between
              renders.
            </li>
            <li>
              A <strong>state setter function</strong> allows us to update the
              state variable and tell React to render the component again with
              the new data.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
