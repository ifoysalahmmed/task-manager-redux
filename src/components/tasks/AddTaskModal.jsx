import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useAddTaskMutation } from "../../redux/features/tasks/taskApi";
import toast from "react-hot-toast";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const [addTask, { data, error }] = useAddTaskMutation();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    addTask({ ...data, status: "pending" });
    onCancel();
  };

  useEffect(() => {
    if (data?.insertedId && !error) {
      toast.success("Task added successfully");
    }
  }, [data, error]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-4 mt-2">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="description" className="mb-2">
            Description
          </label>
          <textarea
            className="w-full rounded-md"
            type="text"
            id="description"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="date" className="mb-2">
            Deadline
          </label>
          <input
            className="w-full rounded-md"
            type="date"
            id="date"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="assignedTo" className="mb-2">
            Assigned To
          </label>
          <select
            className="w-full rounded-md"
            id="assignedTo"
            {...register("assignedTo")}
          >
            <option value="Foysal">Foysal</option>
            <option value="Ahmmed">Ahmmed</option>
            <option value="Limon">Limon</option>
            <option value="Jahid">Jahid</option>
            <option value="Shila">Shila</option>
            <option value="Prosenjit">Prosenjit</option>
            <option value="Shuvo">Shuvo</option>
            <option value="Bilas">Bilas</option>
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="priority" className="mb-2">
            Priority
          </label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register("priority")}
          >
            <option defaultValue value="high">
              High
            </option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => onCancel()}
            type="button"
            className="btn btn-danger"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
