import { ToastContainer as BaseToastContainer } from "react-toastify";

const ToastContainer: React.FC = () => {
  return <BaseToastContainer position="top-right" autoClose={5000} hideProgressBar={true} draggable={false} closeOnClick={false} limit={7} />;
};

export default ToastContainer;
