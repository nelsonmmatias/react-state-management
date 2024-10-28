import { useState, useEffect, FC } from "react";
import "./usersList.css";

type User = {
  id: string;
  name: string;
};

export const UserList: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    console.log("Fetching users data...");
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
  }, []);

  useEffect(() => {
    console.log("Filtering users based on search query...");
    if (query === "") {
      console.log("No filtering query...");
      setFilteredUsers(users);
    } else {
      console.log(`Filtering query: ${query}`);
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [query, users]);

  return (
    <div
      style={{ backgroundColor: "lightblue", borderRadius: 20, padding: 20 }}
    >
      <h1 style={{ textAlign: 'center' }}>Demo playground</h1>
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
            placeholder="Search users by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input"
          />

          <ul className="user-list">
            {filteredUsers.map((user) => (
              <li key={user.id} className="user-item">
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserList;
