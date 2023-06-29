import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
});

export const deleteTodos = createAsyncThunk("deleteTodos", async (todoId) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        method: "DELETE",
    });
    return todoId;
});

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                console.log("Error", action.payload);
                state.isError = true;
            })
            .addCase(deleteTodos.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(deleteTodos.fulfilled, (state, action) => {
                state.isLoading = false;
                // Update the state to remove the deleted todo
                const todoId = action.payload;
                state.data = state.data.filter((todo) => todo.id !== todoId);
            })
            .addCase(deleteTodos.rejected, (state, action) => {
                console.log("Error", action.payload);
                state.isError = true;
            });
    },
});

export default todoSlice.reducer;
