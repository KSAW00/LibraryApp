import { createSlice } from "@reduxjs/toolkit";
import popularBooks from "../data/books";

const booksSlice = createSlice({
    name: "books",
    initialState: popularBooks,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;