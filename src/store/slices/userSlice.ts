import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/types/user.type';

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload };
      }
    },
  },
});

// Selectors
export const selectCurrentUser = (state: { user: UserState }) => state.user.currentUser;

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
