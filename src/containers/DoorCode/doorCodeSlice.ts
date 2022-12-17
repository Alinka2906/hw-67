import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface DoorCodeState {
  code: string;
  resultColor: string,
  password: string,
  stars: string;
  string: string
}

const initialState: DoorCodeState = {
  code: '',
  resultColor: '',
  password: '1111',
  stars: '',
  string: ''
};


export const doorCodSlice = createSlice({
  name: 'doorCode',
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<string>) => {
      if (state.code.length < 4){
        state.code += action.payload;
        state.stars += '*';
      }
    },
    removeNumber: (state) => {
      state.code = state.code.substring(0, state.code.length - 1);
      state.stars = state.stars.substring(0, state.stars.length - 1);
    },
    enterCode: (state) => {
      if (state.code === state.password) {
       state.string = 'You enter correct code';
      } else {
        state.string = 'Try again'
      }
    },
  },
});


export const doorCodeReducer = doorCodSlice.reducer;
export const {addNumber, removeNumber, enterCode} = doorCodSlice.actions;


