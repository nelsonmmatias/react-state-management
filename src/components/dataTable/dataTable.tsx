import { FC } from "react";
import "./dataTable.css";

const arrayMethodsData = [
  {
    operation: "Adding",
    avoid: (
      <code style={{ backgroundColor: "lightgray" }}>{"push, unshift"}</code>
    ),
    prefer: (
      <code style={{ backgroundColor: "lightgray" }}>
        {"concat, [...arr] (spread syntax)"}
      </code>
    ),
  },
  {
    operation: "Removing",
    avoid: (
      <code style={{ backgroundColor: "lightgray" }}>
        {"pop, shift, splice"}
      </code>
    ),
    prefer: (
      <code style={{ backgroundColor: "lightgray" }}>{"filter, slice"}</code>
    ),
  },
  {
    operation: "Replacing",
    avoid: (
      <code style={{ backgroundColor: "lightgray" }}>
        {"splice, arr[i] = ... (assignment)"}
      </code>
    ),
    prefer: <code style={{ backgroundColor: "lightgray" }}>{"map"}</code>,
  },
  {
    operation: "Sorting",
    avoid: (
      <code style={{ backgroundColor: "lightgray" }}>{"reverse, sort"}</code>
    ),
    prefer: (
      <code style={{ backgroundColor: "lightgray" }}>
        {"copy the array first"}
      </code>
    ),
  },
];

export const DataTable: FC = () => {
  return (
    <div className="data-table">
      <h2>Array Methods: Mutating vs Non-Mutating</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Avoid (Mutates the Array)</th>
            <th>Prefer (Returns a New Array)</th>
          </tr>
        </thead>
        <tbody>
          {arrayMethodsData.map((method, index) => (
            <tr key={index}>
              <td>{method.operation}</td>
              <td>{method.avoid}</td>
              <td>{method.prefer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
