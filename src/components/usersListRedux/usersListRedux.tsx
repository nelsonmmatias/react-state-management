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
      setNewUser("");
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
