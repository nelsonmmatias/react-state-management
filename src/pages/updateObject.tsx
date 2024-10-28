import { FC } from "react";
import { DotPlayground } from "../components/dotPalyground/dotPlayground";
import { CodeSnippet } from "../components/codeSnippet/codeSnippet";

export const UpdateObject: FC = () => {
  return (
    <div className="update-objects" id="update-objects">
      <h1 style={{ paddingBottom: 10 }}>Update objects in a state</h1>
      <p>State can store any kind of Javascript values, including objects.</p>
      <p>
        However we can't change objects, instead we need to create a new object
        (or make a copy on existing one) and then set the state to use that new
        object or copy.
      </p>
      <h3>Mutations. What is a mutation?</h3>
      <p>
        So far we have been working with strings, numbers, booleans. The values
        are "immutable" or read-only. We can trigger a re-render to replace a
        value.
      </p>
      <CodeSnippet
        code={`
    const [value, setValue] = useState(0);

    setValue(5);
        `}
      />
      <p>
        The value state changed from 0 to 5 but the number 0 itself did not
        change.
      </p>
      <strong>
        It’s not possible to make any changes to the built-in primitive values
        like numbers, strings, and booleans in JavaScript.
      </strong>
      <p>But if we consider an object in state:</p>
      <CodeSnippet
        code={`
    const [position, setPosition] = useState({ x: 0, y: 0 });
        `}
      />
      <p>
        In theory, it is possible to change the values within the object.{" "}
        <strong>This is called a mutation.</strong>
      </p>
      <CodeSnippet
        code={`
    position.x = 5;
        `}
      />
      <p>
        The code above is correct and possible in Javascript.{" "}
        <strong>However it doesn't work on Component's state.</strong> Despite
        the objects are mutable, in React state we need to see consider them as
        a built-in primitive and immutable values.
      </p>

      <p style={{ paddingTop: 10, paddingBottom: 10 }}>
        On this move dot playground, is expected that the playground moves with
        our mouse movement
      </p>
      <DotPlayground />
      <p>The problem is this code block:</p>
      <CodeSnippet
        code={`
    onPointerMove={e => {
        position.x = e.clientX;
        position.y = e.clientY;
    }}
        `}
      />
      <p>
        This code modifies the object assigned to <code>position</code> from the
        previous render. But without using the setting function, React doesn't
        have an idea that the object needs to change.
      </p>
      <p>
        To trigger a re-render we need to create a new object and pass the new
        object to the set function:
      </p>
      <CodeSnippet
        code={`
    <onPointerMove={e => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        });
    }}>
            `}
      />
    </div>
  );
};
