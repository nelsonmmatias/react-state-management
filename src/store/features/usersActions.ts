import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data.map((user: { name: string }) => user.name);
});
