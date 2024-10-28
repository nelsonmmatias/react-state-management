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
