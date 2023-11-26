import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need to remove a button in our task card. Make the button red and use Heroic Icons.",
      date: "2023-11-26",
      assignedTo: "Foysal",
      priority: "high",
    },
  ],
  userSpecificTasks: [],
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
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const targetElement = state.tasks.find((item) => item.id === payload.id);
      targetElement.status = payload.status;
    },
    userTasks: (state, { payload }) => {
      state.userSpecificTasks = state.tasks.filter(
        (item) => item.assignedTo === payload
      );
    },
  },
});

export const { addTask, removeTask, updateStatus, userTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
