import { Toaster } from "react-hot-toast";

const CustomToaster = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 1500,
        style: {
          fontSize: "1rem",
        },
      }}
    />
  );
};

export default CustomToaster;
