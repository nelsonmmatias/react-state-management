import { FC } from "react";
import { Counter } from "../components/counter/counter";
import { CodeSnippet } from "../components/codeSnippet/codeSnippet";

export const RenderCommit: FC = () => {
  return (
    <div className="render-commit" id="render-commit">
      <h1 style={{ paddingBottom: 10 }}>
        Trigger, render and commit
      </h1>
      <p>
        Before your components are displayed on screen, they must be rendered by
        React.
      </p>
      <p>
        There three steps in this process. Understanding these steps will help
        you to understand how your code execution works and what is the expected
        behavior
      </p>
      <h3 style={{ paddingTop: 10, paddingBottom: 10 }}>
        Let's take a quick look at this counter
      </h3>
      <Counter />
      <p>
        In this scenario React is responsible to make the requests to the DOM (Document Object Model)
        according to the state.
      </p>
      <p>This process of requesting and serving UI has three steps:</p>
      <ul>
        <li>
          <strong>Triggering</strong> a render (make the request - component's
          call)
        </li>
        <li>
          <strong>Rendering</strong> the component (preparing the request -
          execute all component's logic like Hooks (useEffect, useState, etc) and
          build JSX elements)
        </li>
        <li>
          <strong>Committing</strong> to the DOM (placing the order on the DOM -
          painting in the browser)
        </li>
      </ul>
      <h3 style={{ paddingTop: 10, paddingBottom: 10 }}>Quick explanation</h3>
      <p>
        Before we delve into it step by step, let’s take a look at the
        triggering, render, and commit cycle.
      </p>
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*w9y0rGbXq4V59BZBlA6Kpw.png"
        alt="trigger, render and commit"
      />
      <h4>Step 1: Triggering</h4>
      <p>There are two reasons for a component to render</p>
      <ul>
        <li>It’s the component’s initial render.</li>
        <li>
          The component or related components (fathers, grandfathers) are been
          updated
        </li>
      </ul>
      <h5>Initial render</h5>
      <p>
        When your app starts you need to trigger the Initial Render. This is
        done by calling createRoot with the target DOM node and then calling its
        render method with your {`<App/>`} component on your index.tsx:
      </p>
      {createRootExample()}
      <h4>Step 2: (Re-)Rendering when component's state updates</h4>
      <p>
        After initial render occurs, you can trigger further renderings by
        updating its state with the set hook
      </p>
      <p>Updating the component's state automatically queues a new render.</p>
      {setComponentStateExample()}
      <strong>"Rendering" is React calling your components</strong>
      <ul>
        <li>
          <strong>Initial render</strong> - React calls the Root component
        </li>
        <li>
          <strong>Re-renders</strong> - React calls the function component that
          triggered the render
        </li>
      </ul>
      <strong>This process is recursive:</strong> If the the updated component
      calls another component, React will render that component next, and if
      that component will render another component, React will render his child.
      <p>Initial rendering example:</p>
      {hierarchyExample("INITIAL")}
      <p>Component rendering example:</p>
      {hierarchyExample("COMPONENT")}
      <p>Child rendering example:</p>
      {hierarchyExample("CHILD")}
      <h4>Step 3: Commit changes to the DOM</h4>
      <p>After rendering the components React will modify the DOM</p>
      <ul>
        <li>
          <strong>Initial render:</strong> React will use the appendChild() DOM API to put all the DOM Nodes on the screen
        </li>
        <li>
          <strong>Re-renders:</strong> React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.
        </li>
      </ul>
      <h4>Browser painting</h4>
      <p>After rendering is done and React updated the DOM, the browser will repaint the screen.</p>
    </div>
  );
};

const hierarchyExample = (render: string) => {
  let example;

  switch (render) {
    case "INITIAL":
      example = `
        // Initial render
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import './index.css';
        import { App } from './App';
        import reportWebVitals from './reportWebVitals';

        const root = ReactDOM.createRoot(
          document.getElementById('root') as HTMLElement
        );
        
        root.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );`;
      break;
    case "COMPONENT":
      example = `
      // Component Render
      import React from 'react';
      import './App.css';
      import { Counter } from './Counter'; // Import the Counter component

      const App: React.FC = () => {
        return (
          <div className="App">
            <Counter />
          </div>
        );
      }
      export default App;
      `;
      break;
    case "CHILD":
      example = `    
      // Child render
      import { FC, useState } from "react";
      import "./counter.css";

      export const Counter: FC = () => {
        const [count, setCount] = useState(0);

        const incrementCount = () => {
          setCount(count + 1);
        };

        const resetCount = () => {
          setCount(0);
        };

        return (
          <div className="counter">
            <h1>Simple Counter Example</h1>
            <p>
              Click the button to increase the count. The counter starts at 0 and can
              be reset.
            </p>
            <h2>Current Count: {count}</h2>
            <button onClick={incrementCount}>Increment Count</button>
            <button onClick={resetCount} style={{ marginLeft: "10px" }}>
              Reset Count
            </button>
          </div>
        );
      };

      // Then render the childs (<div></div>, <h1></h1>, <h2></h2>, <p></p>, <button></button>)`;
      break;
  }

  return (
    <CodeSnippet code={example ?? ''} />
  );
};

const setComponentStateExample = () => {
  const example = `
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
    {...}
      <button onClick={incrementCount}>Increment Count</button>
    {...}
    </div>
  )
  `;

  return (
    <CodeSnippet code={example ?? ''} />
  );
};

const createRootExample = () => {
  const example = `
    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );

    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  `;

  return (
    <CodeSnippet code={example ?? ''} />
  );
};
