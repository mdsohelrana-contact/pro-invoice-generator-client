import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface SettingsState {
  language: 'en' | 'bn';
  theme: 'light' | 'dark';
}

const initialState: SettingsState = {
  language: 'en',
  theme: 'light',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'bn'>) => {
      state.language = action.payload;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const selectLanguage = (state: RootState) => state.settings.language;
export const selectTheme = (state: RootState) => state.settings.theme;

export const { setLanguage, setTheme, toggleTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
