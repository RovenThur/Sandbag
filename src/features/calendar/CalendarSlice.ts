import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

export interface CalendarState {
    selectedDate: string;
    selectedDateRange: {
        start: string,
        end: string
    }
}

const initialState: CalendarState = {
    selectedDate: new Date().toISOString(),
    selectedDateRange: {
        start: new Date().toISOString(),
        end: new Date().toISOString()
    }
};

export const counterSlice = createSlice({
    name: 'calendar',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        selectedDateString: (state, action: PayloadAction<string>) => {
            state.selectedDate = action.payload;
        },
        selectDateRange: (state, action: PayloadAction<string[]>) => {
            const [start, end] = action.payload;
            state.selectedDateRange = { start, end }
        }
    }
});

export const selectSelectedDate = (state: RootState) => state.calendar.selectedDate;

export const { selectDateRange } = counterSlice.actions;
// export const selectDateRange = (date: Date): AppThunk => (
//     dispatch
// ) => {
//     dispatch(counterSlice.actions.selectedDateString(date.toISOString()));
// };

export default counterSlice.reducer;