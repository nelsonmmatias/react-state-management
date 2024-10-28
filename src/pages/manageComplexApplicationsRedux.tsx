import { FC } from "react";
import { UserListRedux } from "../components/usersListRedux/usersListRedux";
import { CodeSnippet } from "../components/codeSnippet/codeSnippet";

export const ManageComplexApplicationsRedux: FC = () => {
  return (
    <div
      className="manage-complex-applications-redux"
      id="manage-complex-applications-redux"
    >
      <div>
        <h1 style={{ paddingBottom: 10 }}>
          Manage complex applications - State on an Application level
        </h1>
        <p>
          As applications grow in size and complexity, effective management
          becomes crucial. This includes handling state, UI, routing, and
          communication with back-end services.
        </p>
        <p>
          A large and complex application can be hard to manage. Can you imagine
          the nightmare if we need to pass some global state for each page or
          component?
        </p>
        <p>
          Subjects like authentication, global settings like language and
          application theme, notifications, etc.
        </p>
        <CodeSnippet
          code={`
    {
        isAuthenticated: true,
        user: {
            id: '12345',
            name: 'John Doe',
            email: 'john.doe@example.com',
            role: 'admin',
        },
        token: 'abc123xyz',
    }

            `}
        />
        <p>
          There are many examples and use cases for the needs of managing state
          on an Application level.
        </p>
        <p>
          To help developers on this hard task of managing the state on
          application level, there are several Frameworks and libraries. Here
          some of them:
        </p>
        <ul>
          <li>React Context API</li>
          <li>Redux</li>
          <li>Zustand</li>
        </ul>
        <p>Today we will focus on React Redux.</p>
        <h3>What is React Redux?</h3>
        <p>
          Redux is a framework and tool for handling and modifying the global
          state of an application. The user interface initiates events known as
          ‘actions’ to indicate occurrences, and distinct update mechanisms
          called ‘reducers’ adjust the state accordingly.{" "}
          <strong>
            It serves as a centralized store for state that needs to be used
            across your entire application, with rules ensuring that the state
            can only be updated in a predictable fashion.
          </strong>
        </p>
        <h3>When Should I Use Redux?</h3>
        <p> Redux is more useful when:</p>
        <ul>
          <li>
            You have large amounts of application state that are needed in many
            places in the app
          </li>
          <li>The app state is updated frequently over time</li>
          <li>TThe logic to update that state may be complex</li>
          <li>
            The app has a medium or large-sized codebase, and might be worked on
            by many people
          </li>
        </ul>
        <h3>How it works behind the scenes?</h3>
        <img
          style={{ width: "600px" }}
          src="https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif"
          alt="reat-redux-store"
        />
        <p>Redux uses a "one-way data flow" app structure:</p>
        <ul>
          <li>The UI dispatches an action</li>
          <li>
            The store runs the reducers, and the state is updated based on what
            occurred
          </li>
          <li>The store notifies the UI that the state has changed</li>
        </ul>
        <h3>React Redux Toolkit - Quick start</h3>
        <p>First let's see our demo:</p>
        <UserListRedux />
        <p>
          As we can see, React Redux and React Redux Toolkit is a huge framework
          with a lot of features that we can use to manage our application,
          communicate with Back-end services and mutch mutch more.
        </p>
        <p>
          Today we will focus on how we can configure a Redux store, and learn
          what is actions, reducers and extra reducers. As a bonus we will use{" "}
          <code style={{ backgroundColor: "lightgrey" }}>createAsyncThunk</code>
          . Note that React Redux has a lot of libraries to communicate with
          Back-end API's such as Redux-Saga, Redux-Thunk and of course we can
          use other libraries to communicate with Back-end API's like{" "}
          <code style={{ backgroundColor: "lightgrey" }}>axios</code>,{" "}
          <code style={{ backgroundColor: "lightgrey" }}>fetch</code> API and
          React Query.
        </p>
        <h4>Configure the store</h4>
        <p>First of all we need to install react-redux.</p>
        <p>
          To install react-redux, you can use either npm or yarn, depending on
          which package manager you prefer. Below are the steps for both
          methods:
          <p>
            <strong>NPM</strong>
          </p>
          <ul>
            <li>Open your terminal.</li>
            <li>Navigate to your project directory.</li>
            <li>
              Run the following command:{" "}
              <code style={{ backgroundColor: "lightgrey" }}>
                npm install react-redux @reduxjs/toolkit
              </code>
            </li>
          </ul>
          <p>
            <strong>YARN</strong>
          </p>
          <ul>
            <li>Open your terminal.</li>
            <li>Navigate to your project directory.</li>
            <li>
              Run the following command:{" "}
              <code style={{ backgroundColor: "lightgrey" }}>
                yarn add react-redux @reduxjs/toolkit
              </code>
            </li>
          </ul>
        </p>
        <p>
          Next step is to create a folder inside your{" "}
          <code style={{ backgroundColor: "lightgrey" }}>src</code> folder named{" "}
          <code style={{ backgroundColor: "lightgrey" }}>store</code>.
        </p>
        <p>
          Inside the <code style={{ backgroundColor: "lightgrey" }}>store</code>{" "}
          create a new folder named{" "}
          <code style={{ backgroundColor: "lightgrey" }}>features</code>.
        </p>
        <p>
          Now create two files:{" "}
          <code style={{ backgroundColor: "lightgrey" }}>usersActions.ts</code>{" "}
          and{" "}
          <code style={{ backgroundColor: "lightgrey" }}>usersSlice.ts</code>
        </p>
        <p>
          Let's take a dive into{" "}
          <code style={{ backgroundColor: "lightgrey" }}>usersSlice.ts</code>
        </p>
        <CodeSnippet
          code={`
    import { createSlice, PayloadAction } from "@reduxjs/toolkit";
    import { fetchUsers } from "./usersActions";

    export interface UsersState {
        isLoading: boolean;
        users: string[];
        filteredUsers: string[];
    }

    const initialState: UsersState = {
        isLoading: true,
        users: [],
        filteredUsers: [],
    };

    const usersSlice = createSlice({
        name: "users",
        initialState,
        reducers: {
            addUser: (state, action: PayloadAction<string>) => {
                state.users.push(action.payload);
                state.filteredUsers.push(action.payload);
            },
            setLoading: (state, action: PayloadAction<boolean>) => {
                state.isLoading = action.payload;
            },
            filterUsersByName: (state, action: PayloadAction<string>) => {
                const query = action.payload.toLowerCase();
                state.filteredUsers = state.users.filter((user) =>
                    user.toLowerCase().includes(query)
                );
            },
        },
        extraReducers: (builder) => {
            builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(
                fetchUsers.fulfilled,
                (state, action: PayloadAction<string[]>) => {
                    state.users = action.payload;
                    state.filteredUsers = action.payload;
                    state.isLoading = false;
                }
            )
            .addCase(fetchUsers.rejected, (state) => {
                state.isLoading = false;
            });
        },
    });

    export const { addUser, setLoading, filterUsersByName } = usersSlice.actions;
    export default usersSlice.reducer;
            `}
        />
        <h3 style={{ paddingBottom: 10, paddingTop: 10 }}>
          Understanding the Users Slice
        </h3>

        <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>
          1. State Definition
        </h4>
        <p>
          The state is defined with the{" "}
          <code style={{ backgroundColor: "lightgrey" }}>UsersState</code>{" "}
          interface, which holds three properties:
        </p>
        <ul>
          <li>
            <code style={{ backgroundColor: "lightgrey" }}>isLoading</code>: A
            boolean that tracks whether data is being fetched.
          </li>
          <li>
            <code style={{ backgroundColor: "lightgrey" }}>users</code>: An
            array of strings that stores the list of users.
          </li>
          <li>
            <code style={{ backgroundColor: "lightgrey" }}>filteredUsers</code>:
            An array that stores the filtered version of the users list, based
            on search criteria.
          </li>
        </ul>

        <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>2. Initial State</h4>
        <p>
          The initial state is set using the{" "}
          <code style={{ backgroundColor: "lightgrey" }}>initialState</code>{" "}
          object. Initially,{" "}
          <code style={{ backgroundColor: "lightgrey" }}>isLoading</code> is{" "}
          <code style={{ backgroundColor: "lightgrey" }}>true</code>, indicating
          the app is fetching users. Both{" "}
          <code style={{ backgroundColor: "lightgrey" }}>users</code> and{" "}
          <code style={{ backgroundColor: "lightgrey" }}>filteredUsers</code>{" "}
          start as empty arrays.
        </p>

        <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>
          3. Creating the Users Slice
        </h4>
        <p>
          The slice is created using{" "}
          <code style={{ backgroundColor: "lightgrey" }}>createSlice</code> from
          Redux Toolkit. It contains three reducers that modify the state:
        </p>

        <h5 style={{ paddingBottom: 10, paddingTop: 10 }}>
          a. <code style={{ backgroundColor: "lightgrey" }}>addUser</code>{" "}
          Reducer
        </h5>
        <p>
          This reducer adds a new user to both <code>users</code> and{" "}
          <code style={{ backgroundColor: "lightgrey" }}>filteredUsers</code>{" "}
          arrays. The action payload is expected to be a string (the user’s
          name).
        </p>
        <CodeSnippet
          code={`
    state.users.push(action.payload);
            `}
        />
        <p>
          This ensures that whenever a new user is added, both the full user
          list and the filtered list are updated.
        </p>

        <h5 style={{ paddingBottom: 10, paddingTop: 10 }}>
          b. <code style={{ backgroundColor: "lightgrey" }}>setLoading</code>{" "}
          Reducer
        </h5>
        <p>
          This reducer is responsible for updating the{" "}
          <code style={{ backgroundColor: "lightgrey" }}>isLoading</code> state.
          It takes a boolean value to either show or hide the loading indicator.
        </p>
        <CodeSnippet
          code={`
    state.isLoading = action.payload;
            `}
        />
        <h5 style={{ paddingBottom: 10, paddingTop: 10 }}>
          c.{" "}
          <code style={{ backgroundColor: "lightgrey" }}>
            filterUsersByName
          </code>{" "}
          Reducer
        </h5>
        <p>This reducer filters users based on a search query. It:</p>
        <ul>
          <li>
            Converts the search query to lowercase for case-insensitive
            filtering.
          </li>
          <li>
            Filters the{" "}
            <code style={{ backgroundColor: "lightgrey" }}>users</code> array to
            match the query.
          </li>
        </ul>
        <CodeSnippet
          code={`
    state.filteredUsers = state.users.filter((user) => user.toLowerCase().includes(query)
            `}
        />
        <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>
          4. Extra Reducers for Asynchronous Fetch
        </h4>
        <p>These handle the state changes when fetching users from an API:</p>

        <h5 style={{ paddingBottom: 10, paddingTop: 10 }}>
          a.{" "}
          <code style={{ backgroundColor: "lightgrey" }}>
            fetchUsers.pending
          </code>
        </h5>
        <p>
          When the API request is pending,{" "}
          <code style={{ backgroundColor: "lightgrey" }}>isLoading</code> is set
          to <code style={{ backgroundColor: "lightgrey" }}>true</code> to show
          a loading state.
        </p>

        <h5 style={{ paddingBottom: 10, paddingTop: 10 }}>
          b.{" "}
          <code style={{ backgroundColor: "lightgrey" }}>
            fetchUsers.fulfilled
          </code>
        </h5>
        <p>
          When the data is successfully fetched, the list of users is saved to
          both <code style={{ backgroundColor: "lightgrey" }}>users</code> and{" "}
          <code style={{ backgroundColor: "lightgrey" }}>filteredUsers</code>{" "}
          arrays, and{" "}
          <code style={{ backgroundColor: "lightgrey" }}>isLoading</code> is set
          to <code style={{ backgroundColor: "lightgrey" }}>false</code>.
        </p>

        <h5 style={{ paddingBottom: 10, paddingTop: 10 }}>
          c.{" "}
          <code style={{ backgroundColor: "lightgrey" }}>
            fetchUsers.rejected
          </code>
        </h5>
        <p>
          If the API request fails,{" "}
          <code style={{ backgroundColor: "lightgrey" }}>isLoading</code> is set
          to <code style={{ backgroundColor: "lightgrey" }}>false</code> to stop
          the loading state, but no users are added.
        </p>

        <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>
          5. Exporting Actions and Reducer
        </h4>
        <p>
          Finally, the file exports the actions{" "}
          <code style={{ backgroundColor: "lightgrey" }}>addUser</code>,{" "}
          <code style={{ backgroundColor: "lightgrey" }}>setLoading</code>, and{" "}
          <code style={{ backgroundColor: "lightgrey" }}>
            filterUsersByName
          </code>{" "}
          so they can be dispatched from components. The reducer is exported as
          default to be used in the store configuration.
        </p>
        <CodeSnippet
          code={`
    export const { addUser, setLoading, filterUsersByName } = usersSlice.actions;
    export default usersSlice.reducer;
            `}
        />
      </div>

      <p>
        Not Let's take a look into{" "}
        <code style={{ backgroundColor: "lightgrey" }}>usersActions.ts</code>
      </p>

      <CodeSnippet
        code={`
    import { createAsyncThunk } from "@reduxjs/toolkit";

    // Async thunk for fetching users
    export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        return data.map((user: { name: string }) => user.name);
    });
        `}
      />

      <h3 style={{ paddingBottom: 10, paddingTop: 10 }}>
        Understanding the{" "}
        <code style={{ backgroundColor: "lightgrey" }}>fetchUsers</code> Async
        Thunk
      </h3>

      <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>
        1. What is an Async Thunk?
      </h4>
      <p>
        An <strong>async thunk</strong> is a special action creator in Redux
        Toolkit designed for asynchronous operations. It allows us to handle
        side effects like fetching data from an API and automatically dispatches
        actions to represent the different states of the request (pending,
        fulfilled, rejected).
      </p>

      <h5 style={{ paddingBottom: 10, paddingTop: 10 }}>
        2. The <code style={{ backgroundColor: "lightgrey" }}>fetchUsers</code>{" "}
        Thunk
      </h5>
      <p>
        In this case, the{" "}
        <code style={{ backgroundColor: "lightgrey" }}>fetchUsers</code> thunk
        is responsible for fetching a list of users from an external API. The
        data is fetched from the{" "}
        <code style={{ backgroundColor: "lightgrey" }}>
          https://jsonplaceholder.typicode.com/users
        </code>{" "}
        endpoint.
      </p>

      <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>
        3. Creating the Async Thunk
      </h4>
      <p>
        We use the{" "}
        <code style={{ backgroundColor: "lightgrey" }}>createAsyncThunk</code>{" "}
        function from Redux Toolkit to define the async thunk. The first
        argument is the action type, and the second argument is an asynchronous
        function that fetches data from the API.
      </p>
      <CodeSnippet
        code={`  export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {`}
      />
      <p>
        This line creates the{" "}
        <code style={{ backgroundColor: "lightgrey" }}>fetchUsers</code> action.
      </p>

      <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>4. Fetching Data</h4>
      <p>
        Inside the async function, we use the{" "}
        <code style={{ backgroundColor: "lightgrey" }}>fetch</code> API to make
        a GET request to the users API. The{" "}
        <code style={{ backgroundColor: "lightgrey" }}>await</code> keyword
        ensures the code waits for the response before proceeding.
      </p>
      <CodeSnippet
        code={`  const response = await fetch("https://jsonplaceholder.typicode.com/users`}
      />
      <p>Once the response is received, we parse it into JSON format:</p>
      <CodeSnippet code={`  const data = await response.json();`} />

      <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>
        5. Returning Only User Names
      </h4>
      <p>
        The data returned from the API contains an array of user objects. We use{" "}
        <code style={{ backgroundColor: "lightgrey" }}>map</code> to extract
        only the <code style={{ backgroundColor: "lightgrey" }}>name</code>{" "}
        property from each user object and return an array of names.
      </p>
      <CodeSnippet
        code={`  return data.map((user: { name: string }) => user.name);`}
      />

      <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>
        6. Async Thunk Lifecycle
      </h4>
      <p>
        The{" "}
        <code style={{ backgroundColor: "lightgrey" }}>createAsyncThunk</code>{" "}
        automatically handles the different states of the asynchronous
        operation. It dispatches:
      </p>
      <ul>
        <li>
          <strong>Pending</strong>: When the fetch request is initiated.
        </li>
        <li>
          <strong>Fulfilled</strong>: When the data is successfully fetched and
          returned.
        </li>
        <li>
          <strong>Rejected</strong>: If there’s an error during the fetch
          process.
        </li>
      </ul>
      <p>
        These actions can be handled in the slice using{" "}
        <code style={{ backgroundColor: "lightgrey" }}>extraReducers</code> to
        update the state accordingly (e.g., showing loading indicators, saving
        the data, or handling errors).
      </p>

      <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>
        7. Exporting the Thunk
      </h4>
      <p>
        Finally, the thunk is exported so it can be used in your components or
        Redux slice to dispatch the action and trigger the API call.
      </p>
      <CodeSnippet
        code={`  export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {...});`}
      />
      <p>
        <strong>
          Now that we have reducers and actions on our store, we need to
          configure our store. In other words, we need to tell to React that we
          have a store and explain to React how to get it.
        </strong>
      </p>
      <p>
        First, inside your{" "}
        <code style={{ backgroundColor: "lightgrey" }}>store</code> folder,
        create a new file named{" "}
        <code style={{ backgroundColor: "lightgrey" }}>index.ts</code>.
      </p>
      <p>Inside this file paste the following code:</p>
      <CodeSnippet
        code={`
    import { configureStore } from "@reduxjs/toolkit";
    import usersReducer from "./features/usersSlice";

    export const store = configureStore({
        reducer: {
            users: usersReducer,
        },
    });

    export type RootState = ReturnType<typeof store.getState>;
    export type AppDispatch = typeof store.dispatch;

    export default store;
        `}
      />
      <p>What does exactly this configuration?</p>

      <h3 style={{ paddingBottom: 10, paddingTop: 10 }}>
        Redux Store Configuration
      </h3>
      <p>
        This file is responsible for configuring the Redux store for the
        application. It utilizes
        <code style={{ backgroundColor: "lightgrey" }}>
          configureStore
        </code>{" "}
        from Redux Toolkit to set up the store with a specific reducer.
      </p>
      <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>Creating the Store</h4>
      <p>
        The store is created by calling{" "}
        <code style={{ backgroundColor: "lightgrey" }}>configureStore</code> and
        passing in an object containing the{" "}
        <code style={{ backgroundColor: "lightgrey" }}>reducer</code> key. This
        key maps the name of the slice (in this case,{" "}
        <code style={{ backgroundColor: "lightgrey" }}>users</code>) to its
        corresponding reducer function (
        <code style={{ backgroundColor: "lightgrey" }}>usersReducer</code>).
      </p>
      <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>Type Definitions</h4>
      <p>
        Two TypeScript types are defined for better type safety in the
        application:
      </p>
      <ul>
        <li>
          <code style={{ backgroundColor: "lightgrey" }}>RootState</code>: This
          type is derived from the store's state using{" "}
          <code
            style={{ backgroundColor: "lightgrey" }}
          >{`ReturnType<typeof store.getState>`}</code>
          . It represents the entire state of the Redux store.
        </li>
        <li>
          <code style={{ backgroundColor: "lightgrey" }}>AppDispatch</code>:
          This type is set to{" "}
          <code style={{ backgroundColor: "lightgrey" }}>
            typeof store.dispatch
          </code>
          , which provides the type of the dispatch function. This is useful for
          typing dispatch calls throughout the app.
        </li>
      </ul>
      <h4 style={{ paddingBottom: 10, paddingTop: 10 }}>Exporting the Store</h4>
      <p>
        Finally, the configured{" "}
        <code style={{ backgroundColor: "lightgrey" }}>store</code> is exported
        as the default export of the module, making it available for use in
        other parts of the application, such as in the root component or any
        components that need to access the store.
      </p>
      <p>
        <strong>
          Now we need to tell React that we have a store provider.
        </strong>{" "}
        How can we do that? By wraping our application with{" "}
        <code
          style={{ backgroundColor: "lightgrey" }}
        >{`<Provider store={store}><App /></Provider>`}</code>{" "}
        on <code style={{ backgroundColor: "lightgrey" }}>{`index.tsx`}</code>{" "}
        file:
      </p>
      <CodeSnippet
        code={`
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import { Provider } from 'react-redux';
    import { store } from './store/index'
    import { App } from './App';
    import reportWebVitals from './reportWebVitals';

    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <Provider store={store}>
            <App />
        </Provider>,
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
        `}
      />

      <p>
        <strong>Now we can use our store on all application.</strong>
      </p>
      <p>
        To better understand how it works, we will analyse the{" "}
        <code style={{ backgroundColor: "lightgrey" }}>usersListRedux.tsx</code>{" "}
        file.
      </p>
      <CodeSnippet code={`
    import React, { useEffect, useState } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { RootState, AppDispatch } from "../../store";
    import {
        addUser,
        filterUsersByName,
        setLoading,
    } from "../../store/features/usersSlice";
    import { fetchUsers } from "../../store/features/usersActions";
    import "./usersListRedux.css"

    export const UserListRedux: React.FC = () => {
        const dispatch: AppDispatch = useDispatch();
        const { isLoading, filteredUsers } = useSelector(
            (state: RootState) => state.users
        );
        const [newUser, setNewUser] = useState("");
        const [query, setQuery] = useState("");

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleAddUser = () => {
        if (newUser.trim()) {
        dispatch(addUser(newUser.trim()));
        setNewUser(""); // Clear the input field
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);
        dispatch(filterUsersByName(searchQuery));
    };

    const forceLoading = () => {
        dispatch(setLoading(true));
        setTimeout(() => {
        dispatch(setLoading(false));
        }, 2000);
    };

  return (
    <div
      style={{ backgroundColor: "lightblue", borderRadius: 20, padding: 20 }}
    >
      <h1 style={{ textAlign: "center" }}>Demo playground</h1>
      {isLoading ? (
        <div className="container">
          {" "}
          <h2 className="loading-text">Loading users...</h2>
        </div>
      ) : (
        <div className="container">
          <h1 className="title">User List</h1>
          <input
            type="text"
            value={query}
            placeholder="Search by name..."
            onChange={handleSearch}
            className="input"
          />
          <input
            type="text"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            placeholder="Add a new user"
            className="input"
          />
          <button onClick={handleAddUser}>Add User</button>

          <ul className="user-list">
            {filteredUsers.map((user, index) => (
              <li className="user-item" key={index}>
                {user}
              </li>
            ))}
          </ul>

          <button onClick={forceLoading} style={{ marginTop: "20px" }}>
            Force Loading State
          </button>
        </div>
      )}
    </div>
  );
};

        `} />
    </div>
  );
};
