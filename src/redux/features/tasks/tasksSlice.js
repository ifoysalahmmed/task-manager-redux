import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Make the button red and use Heroicon for trashbin icon.",
      date: "2023-08-28",
      assignedTo: "Foysal",
      priority: "high",
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const targetElement = state.tasks.find((item) => item.id === payload.id);
      targetElement.status = payload.status;
    },
  },
});

export const { addTask, removeTask, updateStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
