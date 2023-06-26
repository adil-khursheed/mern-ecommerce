import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ScaleLoader color="#6366F1" />
    </div>
  );
};

export default Loader;
