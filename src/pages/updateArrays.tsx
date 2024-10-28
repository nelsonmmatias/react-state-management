import { FC } from "react";
import { DataTable } from "../components/dataTable/dataTable";
import { List } from "../components/list/list";
import { CodeSnippet } from "../components/codeSnippet/codeSnippet";

export const UpdateArrays: FC = () => {
  return (
    <div className="update-arrays" id="update-arrays">
      <h1 style={{ paddingBottom: 10 }}>Update arrays in a state</h1>
      <p>
        Like objects, arrays are mutable and{" "}
        <strong>we should treat Arrays in React state as read-only.</strong>
      </p>
      <p>
        This means that we shouldn't reassign items inside an array like{" "}
        <code
          style={{ backgroundColor: "lightgrey" }}
        >{`arr[0] = 'John Doe'`}</code>{" "}
        and also, we shouldn't use methods that mutate the array, such as{" "}
        <code style={{ backgroundColor: "lightgrey" }}>{`push()`}</code> or{" "}
        <code style={{ backgroundColor: "lightgrey" }}>{`pop()`}</code>
      </p>
      <p>
        Instead, every time we need to update an array, we want to create a new
        array and pass it to the setting function.
      </p>
      <h3 style={{ paddingBottom: 10, paddingTop: 10 }}>How can we do that?</h3>
      <p>
        Here is a reference table of common array operations explaining what we
        need to avoid and what we can use in case of changing the arrays in
        React state:
      </p>
      <DataTable />
      <p>Let's see an example:</p>
      <List />
      <h3 style={{ paddingBottom: 10, paddingTop: 10 }}>Adding to an array</h3>
      <p>This code block will not work:</p>
      <CodeSnippet code={`
    onClick={() => {
      bands.push({
        id: ++bands.length,
        name: bandName,
      });
    }}
        `} />
      <p>
        <code style={{ backgroundColor: "lightgrey" }}>push()</code> will mutate
        an array, which you don’t want!
      </p>
      <p>Instead, create a new array and set the React state.</p>
      <CodeSnippet
        code={`
    onClick={() => {
      setBands([
        ...bands,
        { id: bands.length + 1, name: bandName }
      ]);
      setBandName("");
    }}
            `}
      />
      <p>
        Sometimes we want to place the new item at the beginning of the array.
      </p>
      <CodeSnippet
        code={`
    setBands([
      { id: bands.length + 1, name: bandName },
      ...bands // Put old items at the end
    ]);
          `}
      />
      <h3 style={{ paddingBottom: 10, paddingTop: 10 }}>
        Remove from an array
      </h3>
      <p>
        The better and easiest way to remove an item from an array is to filter
        it. I mean, create a new array without the item we want to remove and
        then update the React state.
      </p>
      <p>
        We can achieve that easily with{" "}
        <code
          style={{ backgroundColor: "lightgrey" }}
        >{`bands.filter((b) => b.id !== band.id)`}</code>
      </p>
      <CodeSnippet
        code={`
    setBands(
      bands.filter((b) => b.id !== band.id)
    );
          `}
      />
      <h3 style={{ paddingBottom: 10, paddingTop: 10 }}>
        Update an item from an array
      </h3>
      <p>
        If you want to change some or all items from an array, the better way is
        to use <code style={{ backgroundColor: "lightgrey" }}>map()</code> to
        create a new array.
      </p>
      <p>
        We can pass a function to map, and this function can decide what to do
        on each item.
      </p>
      <CodeSnippet
        code={`
    <button
      className="edit"
      style={{ marginRight: 10, marginLeft: 10 }}
      onClick={() => {
        setBands(
          bands.map((b) =>
            b.id === band.id ? { ...b, genre: "Rock" } : b
          )
        );
      }}
    >
      Edit genre
    </button>
          `}
      />
      <p>
        In this example, we are iterating the array using the{" "}
        <code style={{ backgroundColor: "lightgrey" }}>map()</code> function and
        if the item we want to change has the same ID, we add the genre 'Rock'.
      </p>
      <p>But what if you want to change the genre of all items?</p>
      <CodeSnippet
        code={`
    <button
      className="delete"
      style={{ paddingTop: 10, paddingBottom: 10 }}
      onClick={() => {
        setBands(bands.map((b) => ({ ...b, genre: "" })));
      }}
    >
      Reset genres
    </button>
          `}
      />
      <p>
        It's simple; we just need to change each{" "}
        <code style={{ backgroundColor: "lightgrey" }}>b</code> object without
        specifying any condition.
      </p>
      <h3 style={{ paddingBottom: 10, paddingTop: 10 }}>
        Insert an item into an array
      </h3>
      <p>
        Sometimes we may want to insert a new item at a specific position
        instead of at the beginning or the end of the array.
      </p>
      <p>
        To do this, we can use{" "}
        <code style={{ backgroundColor: "lightgrey" }}>...</code> spread
        operator with{" "}
        <code style={{ backgroundColor: "lightgrey" }}>slice()</code> method.
        This method allows you to cut a "slice" of the array.
      </p>
      <CodeSnippet
        code={`
    const insertAtPosition = (position: number) => {
      const insertAt = position; // Could be any index but in this case we receive the position
      const nextBands = [
        // Items before the insertion point:
        ...bands.slice(0, insertAt),
        
        // New item:
        { id: bands.length + 1, name: bandName },
        
        // Items after the insertion point:
        ...bands.slice(insertAt),
      ];
      setBands(nextBands);
      setBandName("");
    };
          `}
      />
      <h3>Bonus track or other possible use cases</h3>
      <p>
        There are some use cases where we cannot use the spread syntax and
        non-mutating methods like{" "}
        <code style={{ backgroundColor: "lightgrey" }}>map()</code> or{" "}
        <code style={{ backgroundColor: "lightgrey" }}>filter()</code> directly
        or alone. In some cases, like sorting or reversing an array, we need to
        create a copy of the array, work on it, and then update the state.
      </p>
      <h4>Reverse</h4>
      <p>Here is an example of reversing an array:</p>
      <CodeSnippet
        code={`
    const handleReverse = () => {
      const reversed = [...bands];
      reversed.reverse(); // This method returns a reference of the original array instead of a new array.
      setBands(reversed);
    };
          `}
      />
      <h4>Sort an array</h4>
      <p>
        Like the example above, the{" "}
        <code style={{ backgroundColor: "lightgrey" }}>sort()</code> method
        returns a reference of the original array, so we cannot use it directly
        on React set state function. To handle this problem we can copy the
        original array and work with the new array.
      </p>
      <CodeSnippet
        code={`
    const handleSort = () => {
      const isAscSorted = [...bands].every(
        (band, i, arr) => i === 0 || arr[i - 1].name <= band.name
      );

      const sortedBands = isAscSorted
        ? [...bands].reverse() // If already sorted in ascending, reverse it
        : [...bands].sort((a, b) => a.name.localeCompare(b.name)); // Otherwise, sort in ascending order

      setBands(sortedBands);
    };
          `}
      />
      <p>
        If we read this code, we can notice that we are always using the spread
        syntax to copy the original array into a new one:{" "}
        <code style={{ backgroundColor: "lightgrey" }}>
          [...bands].reverse()
        </code>{" "}
        and{" "}
        <code style={{ backgroundColor: "lightgrey" }}>
          {`[...bands].sort((a, b) => a.name.localeCompare(b.name));`}
        </code>
        It was two different ways of copying arrays: the first one by
        initializing the copy (
        <code style={{ backgroundColor: "lightgrey" }}>
          const reversed = [...bands];
        </code>
        ) and the other by using the spread syntax directly in the code
        execution.
      </p>
    </div>
  );
};
