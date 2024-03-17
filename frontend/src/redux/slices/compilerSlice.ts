import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface compilerSliceInitialStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
}
const initialState: compilerSliceInitialStateType = {
  fullCode: {
    html: `<html lang="en">
    <body>
      <div class="container">
        <h1>Countdown Timer</h1>
        <div class="timer">
          <input type="number" id="minutesInput" placeholder="Enter minutes">
          <button onclick="startTimer()">Start</button>
        </div>
        <div id="countdown"></div>
      </div>
      <script src="script.js"></script>
    </body>
    </html>`,
    css: `body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    
    .container {
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    
    h1 {
      text-align: center;
    }
    
    .timer {
      text-align: center;
    }
    
    input[type="number"] {
      padding: 8px;
      width: 100px;
    }
    
    button {
      padding: 8px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
    
    button:hover {
      background-color: #0056b3;
    }
    
    #countdown {
      text-align: center;
      font-size: 24px;
      margin-top: 20px;
    }
    `,
    javascript: "This is JS",
  },
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<compilerSliceInitialStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
    updateFullCode: (
      state,
      action: PayloadAction<compilerSliceInitialStateType["fullCode"]>
    ) => {
      state.fullCode = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue, updateFullCode } =
  compilerSlice.actions;
