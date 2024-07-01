
import { createSlice } from '@reduxjs/toolkit';
import { getRandomText } from '../../utils/randomText';

const initialState = {
  text: getRandomText(),
  currentIndex: 0,
  timeLeft: 60,
  isStarted: false,
  typedChars: '',
  wpm: 0,
  accuracy: 100,
  isSubmitted: false,
}

const typingTestSlice = createSlice({
  name: 'typingTest',
  initialState,
  reducers: {
    startTest: (state) => {
      state.isStarted = true;
      state.isSubmitted = false;
    },
    updateTypedChars: (state, action) => {
      state.typedChars = action.payload;
      state.currentIndex = action.payload.length;
    },
    updateTimeLeft: (state, action) => {
      state.timeLeft = action.payload;
      if (state.timeLeft === 0) {
        state.isStarted = false;
        state.isSubmitted = true;
        state.currentIndex = state.typedChars.length;
        typingTestSlice.caseReducers.calculateWpm(state);
        typingTestSlice.caseReducers.calculateAccuracy(state);
      }
    },
    calculateWpm: (state) => {
      const wordsTyped = state.typedChars.trim().split(/\s+/).length;
      const timeElapsed = 60 - state.timeLeft;
      state.wpm = Math.round((wordsTyped / timeElapsed) * 60);
    },
    calculateAccuracy: (state) => {
      if (state.typedChars.length === 0) {
        return state.accuracy = 0;
      }
      const correctChars = state.text
        .split('')
        .filter((char, index) => char === state.typedChars[index]).length;
      const totalChars = state.typedChars.length;
      state.accuracy = totalChars
        ? Math.round((correctChars / totalChars) * 100)
        : 100;
    },
    submitTest: (state) => {
      state.isStarted = false;
      state.isSubmitted = true;
      typingTestSlice.caseReducers.calculateWpm(state);
      typingTestSlice.caseReducers.calculateAccuracy(state);
    },
    resetTest: (state) => {
      state.text = getRandomText();
      state.currentIndex = 0;
      state.timeLeft = 60;
      state.isStarted = false;
      state.typedChars = '';
      state.wpm = 0;
      state.accuracy = 100;
      state.isSubmitted = false;
    },
  },
});

export const {
  startTest,
  updateTypedChars,
  updateTimeLeft,
  calculateWpm,
  calculateAccuracy,
  submitTest,
  resetTest,
} = typingTestSlice.actions;

export default typingTestSlice.reducer;
