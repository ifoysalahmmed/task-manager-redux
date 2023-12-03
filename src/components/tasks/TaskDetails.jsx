import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

const TaskDetails = ({ isOpen, setIsOpen, id }) => {
  const { tasks } = useSelector((state) => state.tasksSlice);

  const task = tasks.find((item) => item.id === id);

  const OnClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
      <div className="space-y-2 mt-3">
        <p>{task?.description}</p>
        <p>Assigned To - {task?.assignedTo}</p>
        <p>Date - {task?.date}</p>
        <p className="capitalize">Priority - {task?.priority}</p>
      </div>
      <div className="flex justify-end">
        <button onClick={() => OnClose()} className="btn btn-danger">
          Close
        </button>
      </div>
    </Modal>
  );
};

export default TaskDetails;
