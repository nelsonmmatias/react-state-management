import { FC } from "react";
import UserList from "../components/usersList/usersList";
import { CodeSnippet } from "../components/codeSnippet/codeSnippet";

export const UseEffectTutorial: FC = () => {
  return (
    <div className="use-effect-tutorial" id="use-effect-tutorial">
      <div>
        <h1 style={{ paddingBottom: 10 }}>
          How and When useEffect Interferes with Component State
        </h1>

        <p>
          The <code style={{ backgroundColor: "lightgrey" }}>useEffect</code>{" "}
          hook can interfere with the state in a component by either modifying
          state values or triggering side effects that result in state changes.
          Understanding when and how these effects run is essential for
          preventing issues like unnecessary renders or unexpected state
          changes.
        </p>

        <h3 style={{ paddingBottom: 10, paddingTop: 10 }}>
          How useEffect Affects State
        </h3>
        <ul>
          <li>
            <strong>Triggering State Updates:</strong>{" "}
            <code style={{ backgroundColor: "lightgrey" }}>useEffect</code> can
            trigger updates to state variables. When this happens, the component
            re-renders to reflect the updated state.
          </li>
          <li>
            <strong>Asynchronous State Updates:</strong> Often, effects like
            data fetching involve asynchronous operations (e.g., API calls).
            These will update the state when the data is received, potentially
            causing the component to re-render multiple times if not managed
            properly.
          </li>
          <li>
            <strong>Resetting State:</strong> Effects can also reset state
            values, either directly or as a result of a change in the component
            lifecycle (such as when the component unmounts).
          </li>
        </ul>

        <h3 style={{ paddingBottom: 10, paddingTop: 10 }}>
          Why Dependencies Matter
        </h3>
        <p>
          Dependencies play a critical role in controlling when and how{" "}
          <code style={{ backgroundColor: "lightgrey" }}>useEffect</code> runs,
          which directly impacts how it affects state.
        </p>

        <ul>
          <li>
            <strong>Efficiency:</strong> The dependency array ensures that
            effects only run when necessary. If a state value is listed as a
            dependency, the effect will run only when that state changes. This
            prevents unnecessary re-renders and keeps your component efficient.
          </li>
          <li>
            <strong>Preventing Infinite Loops:</strong> Without a dependency
            array,{" "}
            <code style={{ backgroundColor: "lightgrey" }}>useEffect</code> runs
            after every render, which can lead to infinite loops if the effect
            itself triggers a state update.
          </li>
          <li>
            <strong>Proper Timing:</strong> If you incorrectly omit a state
            variable from the dependency array, the effect won’t run when
            expected. This can lead to bugs, as the state might not update when
            the user expects it to.
          </li>
        </ul>

        <h3 style={{ paddingBottom: 10, paddingTop: 10 }}>
          How the Dependency Array Works
        </h3>
        <ul>
          <li>
            <strong>
              Empty Array (
              <code style={{ backgroundColor: "lightgrey" }}>[]</code>):
            </strong>{" "}
            The effect runs once when the component mounts and never again.
          </li>
          <li>
            <strong>State as Dependency:</strong> When you list a state variable
            (e.g.,{" "}
            <code style={{ backgroundColor: "lightgrey" }}>[stateVar]</code>),
            the effect runs whenever that state variable changes.
          </li>
          <li>
            <strong>No Array:</strong> The effect runs after every single
            render, which can be inefficient and cause performance issues.
          </li>
        </ul>

        <h3 style={{ paddingBottom: 10, paddingTop: 10 }}>Key Takeaways</h3>
        <ul>
          <li>
            Understanding how and when{" "}
            <code style={{ backgroundColor: "lightgrey" }}>useEffect</code>{" "}
            affects state is crucial for writing efficient, predictable
            components.
          </li>
          <li>
            Always specify dependencies carefully to avoid unnecessary renders
            and bugs.
          </li>
          <li>
            The dependency array gives you fine control over when your effect
            should run, ensuring efficient state management.
          </li>
        </ul>
      </div>
      <h3 style={{ paddingBottom: 10, paddingTop: 10 }}>How it works?</h3>
      <UserList />
      <p>
        The <code style={{ backgroundColor: "lightgrey" }}>UserList</code> shows
        us two different effects. A {" "}
        <code style={{ backgroundColor: "lightgrey" }}>useEffect</code> without
        any depency that runs only one time when the component is mounted to
        fetching data and anther one to managing state updates based on
        dependencies.
      </p>

      <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>
        Fetching Data on Component Mount
      </h4>
      <p>
        The first{" "}
        <code style={{ backgroundColor: "lightgrey" }}>useEffect</code> hook is
        used to fetch data when the component is initially mounted. It mimics
        the behavior of{" "}
        <code style={{ backgroundColor: "lightgrey" }}>componentDidMount</code>{" "}
        in class components.
      </p>
      <p>
        The <code style={{ backgroundColor: "lightgrey" }}>useEffect</code> hook
        has an empty dependency array (
        <code style={{ backgroundColor: "lightgrey" }}>[]</code>), which means
        it will only run once when the component is first rendered.
      </p>
      <CodeSnippet
        code={`useEffect(() => {
  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setIsLoading(false);
      });
  }, 1500);
}, []);`}
      />
      <p>
        This <code style={{ backgroundColor: "lightgrey" }}>useEffect</code> has
        different purposes like:
      </p>
      <ul>
        <li>
          Start a loading state by setting{" "}
          <code style={{ backgroundColor: "lightgrey" }}>isLoading</code> to{" "}
          <code>true</code>.
        </li>
        <li>Fetch a list of users from a remote API.</li>
        <li>
          Update the <code style={{ backgroundColor: "lightgrey" }}>users</code>{" "}
          and{" "}
          <code style={{ backgroundColor: "lightgrey" }}>filteredUsers</code>{" "}
          state with the fetched data.
        </li>
        <li>
          Turn off the loading state by setting{" "}
          <code style={{ backgroundColor: "lightgrey" }}>isLoading</code> to{" "}
          <code>false</code> when the data is loaded or an error occurs.
        </li>
      </ul>

      <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>
        Filtering Users Based on Search Query
      </h4>
      <p>
        The second{" "}
        <code style={{ backgroundColor: "lightgrey" }}>useEffect</code> hook
        listens for changes to both the{" "}
        <code style={{ backgroundColor: "lightgrey" }}>query</code> and{" "}
        <code style={{ backgroundColor: "lightgrey" }}>users</code> state. It
        re-runs whenever the user types a search query or when the list of users
        is updated (such as after the initial fetch).
      </p>
      <CodeSnippet
        code={`
    useEffect(() => {
        if (query === "") {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter((user) =>
            user.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    }, [query, users]);
`}
      />
      <p>
        This effect filters the list of users based on the{" "}
        <code style={{ backgroundColor: "lightgrey" }}>query</code> input:
      </p>
      <ul>
        <li>
          If the <code style={{ backgroundColor: "lightgrey" }}>query</code> is
          empty, it resets{" "}
          <code style={{ backgroundColor: "lightgrey" }}>filteredUsers</code> to
          the full <code>users</code> list.
        </li>
        <li>
          If there is a search query, it filters the{" "}
          <code style={{ backgroundColor: "lightgrey" }}>users</code> array to
          include only those users whose names match the search string.
        </li>
        <li>
          The effect is triggered whenever the{" "}
          <code style={{ backgroundColor: "lightgrey" }}>query</code> or{" "}
          <code style={{ backgroundColor: "lightgrey" }}>users</code> change,
          which ensures the filtered list is always up to date.
        </li>
      </ul>

      <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>
        Why are Dependencies Important?
      </h4>
      <p>
        The dependency array passed to{" "}
        <code style={{ backgroundColor: "lightgrey" }}>useEffect</code> controls
        when the effect should run. Without the correct dependencies,{" "}
        <strong>the effect could run unnecessarily or miss updates.</strong>
      </p>
      <ul>
        <li>
          In the first{" "}
          <code style={{ backgroundColor: "lightgrey" }}>useEffect</code>, the
          empty dependency array (
          <code style={{ backgroundColor: "lightgrey" }}>[]</code>) ensures the
          fetch operation runs only once, when the component is mounted. This
          prevents the data from being fetched repeatedly on every render.
        </li>
        <li>
          In the second{" "}
          <code style={{ backgroundColor: "lightgrey" }}>useEffect</code>, the
          dependencies (
          <code style={{ backgroundColor: "lightgrey" }}>[query, users]</code>)
          ensure the filtering logic runs only when the search query changes or
          when the user list is updated.
        </li>
      </ul>
    </div>
  );
};
